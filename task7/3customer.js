class Customer {

    constructor (name) {
    
        this.name = name;
    
        if (typeof name === 'undefined') { this.name = "Невідомий замовник"; }
    
    }
    
}
let customerList = new Array()
function find_Customer (name) {

    for (let id = 0; id < customerList.length; id++) {

        let customer = customerList[id];

        if (name === customer.name) { return customer; }

    }

    return -1;

}

function add_Customer (name) {

    let customer = new Customer(name);
    customerList.push(customer);

    return customer;

}

function remove_Customer (name) {

    let customer = find_Customer(name);

    if (customer === -1) { return -1; }

    let id = customerList.indexOf(customer);
    customerList.splice(id, 1);

    return 1;

}

function edit_Customer (name,new_name) {

    let customer = find_Customer(name);

    if (customer === -1) { return -1; }

    let id = customerList.indexOf(customer);
    
    customerList[id].name = new_name;

    return 1;

}

function get_Customer_List () {

    console.log("\n" + `Список усіх замовників:`);

    for (let id = 0; id < customerList.length; id++) {

        let customer = customerList[id];
        console.log(`\n${id+1} Ім'я замовника: ${customer.name}`);

    }

    console.log();

    return customerList;
}

exports.find_Customer      = find_Customer;
exports.add_Customer       = add_Customer;
exports.remove_Customer    = remove_Customer;
exports.edit_Customer      = edit_Customer;
exports.get_Customer_List  = get_Customer_List;