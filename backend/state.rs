use std::collections::HashMap;
use std::cell::RefCell;
use candid::Principal;

/// Menyimpan jumlah jaminan (collateral) yang disimpan user
thread_local! {
    pub static COLLATERALS: RefCell<HashMap<Principal, u64>> = RefCell::new(HashMap::new());
}

/// Menyimpan jumlah pinjaman (debt) yang dimiliki user
thread_local! {
    pub static BORROWS: RefCell<HashMap<Principal, u64>> = RefCell::new(HashMap::new());
}

/// Menyimpan saldo pengguna (opsional, tergantung penggunaan)
thread_local! {
    pub static BALANCES: RefCell<HashMap<Principal, u64>> = RefCell::new(HashMap::new());
}
