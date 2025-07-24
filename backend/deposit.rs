use candid::Principal;

use crate::BALANCES;
use std::collections::HashMap;

pub fn deposit(user: Principal, amount: u64) -> Result<(), String> {
    BALANCES.with(|b| {
        let mut balances = b.borrow_mut();
        let entry = balances.entry(user).or_insert(0);
        *entry += amount;
    });
    Ok(())
}
