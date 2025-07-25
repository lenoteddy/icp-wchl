use ic_cdk::api::management_canister::http_request::{
    CanisterHttpRequestArgument, HttpHeader, HttpMethod, http_request,
};
use ic_cdk_macros::{update, query};
use serde_json::Value;
use std::cell::RefCell;

thread_local! {
    static TOKEN_PRICE_USD: RefCell<u64> = RefCell::new(0);
}

#[update]
async fn update_token_price() {
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=chain-key-bitcoin&vs_currencies=usd";

    let request = CanisterHttpRequestArgument {
        url: url.to_string(),
        max_response_bytes: Some(2048),
        method: HttpMethod::GET,
        headers: vec![
            HttpHeader {
                name: "Accept".to_string(),
                value: "application/json".to_string(),
            },
        ],
        body: None,
        transform: None,
    };

    let response = http_request(request, 1_600_000_000).await.unwrap().0;

    let body_str = String::from_utf8(response.body).unwrap();
    if let Ok(json) = serde_json::from_str::<Value>(&body_str) {
        if let Some(price) = json["chain-key-bitcoin"]["usd"].as_f64() {
            TOKEN_PRICE_USD.with(|p| *p.borrow_mut() = (price * 100.0) as u64);
        }
    }
}

#[query]
fn get_token_price() -> u64 {
    TOKEN_PRICE_USD.with(|p| *p.borrow())
}
