// Using ES6
const Car = {
    model: '',
    getYear() {
        return this.year;
    },
    getModel() {
        return this.model;
    },
    printDetails() {
        console.log(`The car model is ${this.getModel()} and the year is ${this.getYear()}`)
    },
    init(model, year) {
        this.model = model;
        this.year = year;
    }
};

const car1 = Object.create(Car);
car1.init('honda', 2018);

const car2 = Object.create(Car);
car2.init('porsche', 2015);

car1.printDetails();
car2.printDetails();
