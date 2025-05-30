 class Customer{
    
    firstName: String;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
 }

 let customer: Customer = new Customer("Matt", "Qu");
 console.log(customer.firstName + " " +customer.lastName);
 customer.firstName = "Shelly";
 customer.lastName = "Wang";
 console.log(customer.firstName + " " +customer.lastName);