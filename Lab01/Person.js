const chalk = require('chalk');


class Person {
    
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

speak() {
    return(chalk.red("Vicky"));
}

}

module.exports = Person;