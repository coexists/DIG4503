const Express = require("express");
const App = Express();
const port = 80;
const Chalk = require("Chalk");

const pokemons = require("json-pokemon");
const monArray = pokemons;
//const getPokemons = require("json-pokemon/getPokemon");

//const name = getPokemons.getPokemonByName();
//const id = getPokemons.getPokemonById();


App.get("/name/:name", (req,res) => {
     
    let result = "Error! No matching Pokemon Name!";
    
    monArray.forEach((value) => {
        if(value.name.toLowerCase() == req.params.name){
             let index = value.id - 1;
             result = monArray[index];
        }
    });

    if (result.error) {
        console.log(Chalk.red(req.path));
    }
    else {
        console.log(Chalk.green(req.path));
        console.log(result);
    }
    return result;
});

App.get("/id/:id", (req, res) => {
    
    let result = "Error! No matching Pokemon ID!";
    
    monArray.forEach((value) => {
        if(value.id == req.params.id){
             let index = value.id - 1;
             result = monArray[index];
        }
    });

    if (result.error) {
        console.log(Chalk.red(req.path));
        console.log(result);
    }
    else {
        console.log(Chalk.green(req.path));
        console.log(result);
    }
    return result;
}); 

App.listen(port,() => {
    console.log("Server's a' Runnin'!");
});