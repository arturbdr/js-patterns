function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Using function. Arrow function can't be used because 'this' is binded to global at this point
Person.prototype.printDetails = function () {
    console.log(`My name is ${this.name} and I'am ${this.age} years old`);
};

const johnPerson = new Person('John', 30);
const maryPerson = new Person('Mary', 33);

johnPerson.printDetails();
maryPerson.printDetails();