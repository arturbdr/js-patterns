// Only work in ES6
let Notebook = class {
    constructor(price, type) {
        this.price = price;
        this.type = type;
    }

    // Shorthand method definition
    printDetails() {
        console.log(`The price of this computer is ${this.price} and the type is ${this.type}`);
    }

    // getter method
    get upperType() {
        return this.type.toUpperCase();
    }
};

const macBook = new Notebook('1.999', 'MacBook Pro');
const dell = new Notebook('1.299', 'Dell Latitude');

macBook.printDetails();
dell.printDetails();

console.log(macBook.upperType);