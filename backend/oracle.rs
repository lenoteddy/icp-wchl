
use std::cell::RefCell;
pub use get_token_price as get_price;

thread_local! {
    static TOKEN_PRICE_USD: RefCell<u64> = RefCell::new(100); // Default price: $100
}

// Getter
pub fn get_token_price() -> u64 {
    TOKEN_PRICE_USD.with(|p| *p.borrow())
}

// Setter (1)
pub fn set_token_price(price: u64) {
    TOKEN_PRICE_USD.with(|p| *p.borrow_mut() = price);
}

// Setter (2) — opsional kalau kamu mau pakai nama berbeda
pub fn update_token_price(new_price: u64) {
    TOKEN_PRICE_USD.with(|p| *p.borrow_mut() = new_price);
}
