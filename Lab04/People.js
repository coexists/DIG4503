
const Person = require("./Person.js");
const faker = require('faker');

class People {

    constructor() {

        this.people = [];
    
for(let i=0; i < 99; i++)
{
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
        }
    }
        readColor(color) {
            App.get("/person/color/:color", (req, res) => { 

                let result = {"error": "couldn't find"};
                
                    people.forEach((value)=> {
                        if(value.color == color) {
                            result = value;
                            //ask for color
                        }
                    });
                
                    if(result.error){
                        //in red
                        console.log(req.path);
                    } else {
                        //in green
                        console.log(req.path);
                    }
                    res.send(result);
                    //would show error if wrong input
        }
        return(result);
}
module.exports = People;