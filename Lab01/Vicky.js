const Person = require("./Person.js");

class Vicky extends Person{
    constructor(name, favoriteColor, age) {
        super(name, favoriteColor);
        this.age = age;
        
    }

}
module.exports = Vicky;