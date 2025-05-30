var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var customer = new Customer("Matt", "Qu");
console.log(customer.firstName + " " + customer.lastName);
customer.firstName = "Shelly";
customer.lastName = "Wang";
console.log(customer.firstName + " " + customer.lastName);
