use candid::{CandidType, Deserialize, Principal};
use ic_cdk_macros::*;
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl, StableBTreeMap, Storable,
};
use std::cell::RefCell;

// ===== Type Definitions ===== //
type Memory = VirtualMemory<DefaultMemoryImpl>;

// LoanInfo must implement Storable + BoundedStorable
#[derive(CandidType, Deserialize, Default, Clone)]
struct LoanInfo {
    collateral: u64,
    debt: u64,
}

// Implement Storable manually
impl Storable for LoanInfo {
    const BOUND: ic_stable_structures::storable::Bound =
        ic_stable_structures::storable::Bound::Unbounded;

    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        candid::encode_one(self).unwrap().into()
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        candid::decode_one(&bytes).unwrap()
    }
}

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static LOANS: RefCell<StableBTreeMap<Principal, LoanInfo, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0)))
        )
    );
}

// ===== Canister Methods ===== //

#[update]
fn deposit_collateral(amount: u64) {
    let user = ic_cdk::api::msg_caller();
    LOANS.with(|loans| {
        let mut map = loans.borrow_mut();
        let mut entry = map.get(&user).unwrap_or_default();
        entry.collateral += amount;
        map.insert(user, entry);
    });
    ic_cdk::println!("User {:?} deposited {} collateral", user, amount);
}

#[update]
fn borrow(amount: u64) {
    let user = ic_cdk::api::msg_caller();
    LOANS.with(|loans| {
        let mut map = loans.borrow_mut();
        let mut entry = map.get(&user).unwrap_or_default();

        let max_borrow = entry.collateral / 2;
        assert!(
            amount <= max_borrow - entry.debt,
            "Borrow amount exceeds limit"
        );

        entry.debt += amount;
        map.insert(user, entry);
    });
}

#[update]
fn repay_loan() {
    let user = ic_cdk::api::msg_caller();
    LOANS.with(|loans| {
        let mut map = loans.borrow_mut();
        if let Some(mut entry) = map.get(&user) {
            entry.debt = 0;
            entry.collateral = 0;
            map.insert(user, entry);
        }
    });
}

#[query]
fn get_balances() -> Vec<(Principal, LoanInfo)> {
    LOANS.with(|loans| loans.borrow().iter().collect())
}

#[update]
async fn get_ckbtc_balance() -> u64 {
    // Simulasi: 0.5 ckBTC = 50_000_000 satoshi
    50_000_000
}

//Export Candid
ic_cdk::export_candid!();

// #[query]
// async fn get_ckbtc_balance() -> u64 {
//     let user = ic_cdk::api::msg_caller();
//     let ckbtc_ledger_canister_id = Principal::from_text("mc6ru-gyaaa-aaaar-qaaaq-cai").unwrap();
//     ledger::get_ckbtc_balance(ckbtc_ledger_canister_id, user).await
// }

// #[update]
// async fn get_ckbtc_balance() -> u64 {
//     let user = ic_cdk::api::msg_caller();
//     let ckbtc_ledger_canister_id = Principal::from_text("mc6ru-gyaaa-aaaar-qaaaq-cai").unwrap();
//     ledger::get_ckbtc_balance(ckbtc_ledger_canister_id, user).await
// }
