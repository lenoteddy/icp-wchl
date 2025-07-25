use candid::Principal;

use crate::BORROWS;

pub fn repay_loan(user: Principal, amount: u64) -> Result<(), String> {
    BORROWS.with(|b| {
        let mut borrows = b.borrow_mut();
        let debt = borrows.entry(user).or_insert(0);
        if *debt == 0 {
            return Err("No outstanding loan".into());
        }
        *debt = debt.saturating_sub(amount);
        Ok(())
    })
}
