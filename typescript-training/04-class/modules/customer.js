"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
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
exports.Customer = Customer;
