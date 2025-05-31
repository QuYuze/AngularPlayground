"use strict";
class CustomerSimpleConstructor {
    //private var only accesibles within class scope
    //by convention, leading under score means interna; variables
    //simpler way of writing constructor
    /*
    instead of this

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

        Do this:
    */
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let customerSimple = new CustomerSimpleConstructor("Matt", "Qu");
console.log(customerSimple.firstName + " " + customerSimple.lastName);
customerSimple.firstName = "John";
customerSimple.lastName = "Zhong";
console.log(customerSimple.firstName + " " + customerSimple.lastName);
