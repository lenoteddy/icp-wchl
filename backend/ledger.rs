use candid::{CandidType, Deserialize, Principal};
use ic_cdk::api::call::call;
use sha2::{Digest, Sha224};

#[derive(CandidType, Deserialize)]
struct Account {
    account: Vec<u8>,
}

#[derive(CandidType, Deserialize)]
pub struct Balance {
    pub e8s: u64,
}

pub async fn get_ckbtc_balance(ledger_canister_id: Principal, user_principal: Principal) -> u64 {
    let account_id = principal_to_account(user_principal);
    let args = (Account { account: account_id },);
    let (balance,): (Balance,) = call(ledger_canister_id, "account_balance", args)
        .await
        .expect("Failed to call ledger");
    balance.e8s
}

fn principal_to_account(principal: Principal) -> Vec<u8> {
    let mut hash = Sha224::new();
    hash.update(b"\x0Aaccount-id");
    hash.update(principal.as_slice());
    let padding = [0u8; 32];
    hash.update(&padding[..]);
    hash.finalize().to_vec()
}