use candid::{CandidType, Deserialize, Nat, Principal};
use ic_cdk_macros::*;
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl, StableBTreeMap, Storable,
};
use serde::Serialize;
use std::cell::RefCell;

// ===== Constants ===== //
const CKTESTBTC_CANISTER_ID: &str = "mc6ru-gyaaa-aaaar-qaaaq-cai";

// ===== Type Definitions ===== //
type Memory = VirtualMemory<DefaultMemoryImpl>;

// LoanInfo must implement Storable + BoundedStorable
#[derive(CandidType, Deserialize, Default, Clone)]
struct LoanInfo {
    collateral: u64,
    debt: u64,
}

#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Account {
    pub owner: Principal,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub subaccount: Option<Vec<u8>>, // 32-byte subaccount
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
pub async fn get_cktestbtc_balance_of(account: Account) -> Result<Nat, String> {
    let canister_id: Principal = CKTESTBTC_CANISTER_ID
        .parse()
        .map_err(|e| format!("Invalid principal: {}", e))?;

    let result: Result<(Nat,), _> =
        ic_cdk::api::call::call(canister_id, "icrc1_balance_of", (account,)).await;

    match result {
        Ok((balance,)) => Ok(balance),
        Err((code, msg)) => Err(format!("Call failed with code {:?}: {}", code, msg)),
    }
}

//Export Candid
ic_cdk::export_candid!();
