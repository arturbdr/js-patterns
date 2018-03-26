const Person = (function () {

    function Person(name, age) {
        // Avoid to be called as a function
        if (Object.getPrototypeOf(this) !== Person.prototype) {
            const personObject = Object.create(Person.prototype);
            personObject.constructor.apply(personObject, arguments);
            return personObject;
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

// Even without the new operator, it will be created a new instance
const errorPerson = Person('noone', 99);
errorPerson.sayPersonAge();
errorPerson.sayName();