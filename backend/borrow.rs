use candid::Principal;
use ic_cdk::caller;
use crate::state::{COLLATERALS, BORROWS};
use crate::oracle::get_token_price;

/// Fungsi untuk meminjam sejumlah `amount` token
pub fn borrow(amount: u64) {
    let caller = caller();
    let price = get_token_price(); // Harga token saat ini
    let collateral = COLLATERALS.with(|c| *c.borrow().get(&caller).unwrap_or(&0));
    let current_debt = BORROWS.with(|b| *b.borrow().get(&caller).unwrap_or(&0));

    let max_borrow = collateral * 60 / 100; // Hanya bisa pinjam 60% dari jaminan

    if current_debt + amount > max_borrow {
        panic!("Borrow exceeds 60% of collateral value");
    }

    BORROWS.with(|b| {
        b.borrow_mut()
            .entry(caller)
            .and_modify(|d| *d += amount)
            .or_insert(amount);
    });

    ic_cdk::println!("User {:?} borrowed {}", caller, amount);
}

/// Fungsi untuk mengembalikan seluruh pinjaman
pub fn repay_all() {
    let caller = caller();
    BORROWS.with(|b| {
        b.borrow_mut().remove(&caller);
    });

    ic_cdk::println!("User {:?} repaid all loans", caller);
}
