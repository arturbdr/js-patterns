// Using ES6
const House = {
    getSize() {
        return this.size;
    },
    getColor() {
        return this.color;
    },
    printDetails() {
        console.log(`The house size is ${this.getSize()} and the color is ${this.getColor()}`)
    },
};

const house1 = Object.create(House, {
    size: {
        value: 'big',
    },
    color: {
        value: 'white'
    }
});

const house2 = Object.create(House, {
    size: {
        value: 'small',
    },
    color: {
        value: 'blue'
    }
});

house1.printDetails();
house2.printDetails();
