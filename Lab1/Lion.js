const Cat = require("./cat.js");

class Lion extends Cat {
    constructor(color, age, weight) {
            super(color, age);
            this.weight = weight;
            
    }

}
module.exports = Lion;