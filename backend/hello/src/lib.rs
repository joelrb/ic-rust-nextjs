use std::cell::RefCell;

use b3_utils::{
    memory::{init_stable_mem_refcell, types::DefaultStableBTreeMap},
    principal::StoredPrincipal,
};

thread_local! {
    static USERS: RefCell<DefaultStableBTreeMap<StoredPrincipal, String>> = init_stable_mem_refcell("users", 1).unwrap();
}

#[ic_cdk::query]
fn get_name() -> Option<String> {
    let principal = ic_cdk::caller();

    USERS.with(|users| {
        let users = users.borrow();
        users.get(&principal.into())
    })
}

#[ic_cdk::update]
fn set_name(name: String) {
    let principal = ic_cdk::caller();

    USERS.with(|users| {
        let mut users = users.borrow_mut();
        users.insert(principal.into(), name);
    });
}

// Always include this at the end of your file
ic_cdk::export_candid!();
