export const idlFactory = ({ IDL }) => {
  const LoanInfo = IDL.Record({ 'debt' : IDL.Nat64, 'collateral' : IDL.Nat64 });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text });
  return IDL.Service({
    'borrow' : IDL.Func([IDL.Nat64], [], []),
    'deposit_collateral' : IDL.Func([IDL.Nat64], [], []),
    'get_balances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, LoanInfo))],
        ['query'],
      ),
    'get_cktestbtc_balance_of' : IDL.Func([Account], [Result], []),
    'repay_loan' : IDL.Func([], [], []),
    'withdraw' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
