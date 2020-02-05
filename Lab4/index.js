const Express = require("express");
const App = Express();
const port = 80;

const Person = require("./Person.js");
let people = [];
const faker = require('faker');

console.log(name, color);

for(let i=0; i < 99; i++)
{
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}
App.get("/person/name/:name", (req, res) => { 
    people.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(value);
            //ask for name, get person back
        }
    });
    res.send("invalid name!");
    //would show error if wrong input
});
App.get("/person/color/:color", (req, res) => { 
    people.forEach((value)=> {
        if(value.color == req.params.color) {
            res.send(value);
            //ask for color
        }
    });
    res.send("invalid color!");
    //would show error if wrong input
});

App.listen(port, () => {
    console.log("server running");
});

//run server using node index.js
//for lab use chalk for the colors, not faker