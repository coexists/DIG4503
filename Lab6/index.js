const Express = require("express");
const App = Express();
const cors = require("cors"); 
const port = 80; 
const chalk = require("Chalk");

const coolPokemons = require("json-pokemon");

App.use(cors());

App.get("/", Express.static("client/build"));

App.get("/id/:id", (req, res) => {
    let result = {"error" : "Invalid ID!"};
    let monId = req.params.id;

    coolPokemons.forEach((value) => {
        if(value.id == monId){
            result = value;
        }
    });

    if (result.error) {
        console.log(chalk.red(req.path));
    }
    else {
        console.log(chalk.green(req.path));
    }
    res.send(result);
}); 

App.get("/name/:name", (req,res) => {
     
    let result = {"error" : "Invalid Name!"};
    
    let monName = req.params.name;
    coolPokemons.forEach((value) => {
        if(value.name.toLowerCase() == monName){
            result = value;
        }
    });

    if (result.error) {
        console.log(chalk.red(req.path));
    }
    else {
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.listen(port, () =>{
    console.log("Server is a' Runnin'");
})
