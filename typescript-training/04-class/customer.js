"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    // we use accessor, format: get/set property()
    //  externally, we will only able to use the properties states in the accessors
    set firstName(value) {
        this._firstName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
}
let customer = new Customer("Matt", "Qu");
console.log(customer.firstName + " " + customer.lastName);
customer.firstName = "Shelly";
customer.lastName = "Wang";
console.log(customer.firstName + " " + customer.lastName);
