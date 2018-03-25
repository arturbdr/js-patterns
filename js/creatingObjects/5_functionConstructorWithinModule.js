const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // Cant use arrow function!
    Person.prototype.sayName = function () {
        console.log(this.name);
    };

    return Person;
})();

const johnConnorPerson = new Person('John Connor');
johnConnorPerson.sayName();