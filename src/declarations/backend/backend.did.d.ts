import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'owner' : Principal,
  'subaccount' : [] | [Uint8Array | number[]],
}
export interface LoanInfo { 'debt' : bigint, 'collateral' : bigint }
export type Result = { 'Ok' : bigint } |
  { 'Err' : string };
export interface _SERVICE {
  'borrow' : ActorMethod<[bigint], undefined>,
  'deposit_collateral' : ActorMethod<[bigint], undefined>,
  'get_balances' : ActorMethod<[], Array<[Principal, LoanInfo]>>,
  'get_cktestbtc_balance_of' : ActorMethod<[Account], Result>,
  'liquidate' : ActorMethod<[Principal], undefined>,
  'repay_loan' : ActorMethod<[], undefined>,
  'set_price' : ActorMethod<[bigint], undefined>,
  'repay_loan' : ActorMethod<[], undefined>,
  'withdraw' : ActorMethod<[Principal, bigint], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
