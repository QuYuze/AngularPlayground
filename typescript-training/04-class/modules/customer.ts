 export class Customer{
    
    //private var only accesibles within class scope
    //by convention, leading under score means interna; variables
    
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // we use accessor, format: get/set property()
    //  externally, we will only able to use the properties states in the accessors
    set firstName(value: string){
        this._firstName = value;
    }

    get firstName(){
        return this._firstName;
    }

    set lastName(value: string){
        this._lastName = value;
    }

    get lastName(){
        return this._lastName;
    }

 }