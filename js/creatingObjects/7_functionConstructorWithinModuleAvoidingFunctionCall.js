const Person = (function () {

    function Person(name, age) {
        // Avoid to be called as a function
        if (Object.getPrototypeOf(this) !== Person.prototype) {
            throw new TypeError("Constructor called as a function.");
        }
        else {
            this.name = name;
            this.age = age;
        }
    }

    // Cant use arrow function!
    Person.prototype.sayName = function () {
        console.log(`this is my name ${ this.name} `);
    };

    // Cant use arrow function!
    Person.prototype.sayPersonAge = function () {
        console.log(`this is my age ${this.age}`);
    };

    return Person;
})();

const johnConnorPerson = new Person('John Connor', 33);
johnConnorPerson.sayName();
johnConnorPerson.sayPersonAge();

// Now this will throw an error
const errorPerson = Person('noone', 99);
errorPerson.sayPersonAge();
errorPerson.sayName();