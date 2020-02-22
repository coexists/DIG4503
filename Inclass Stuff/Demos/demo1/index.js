const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");

let contents = fs.readFileSync("database.json");


//fs is short for file system

App.get("./demo1/name/:name", (req, res) => {

    let result= {"error": "Couldn't get name!"};

    res.json(result);
});

App.get("./demo1/score/:score", (req, res) => {

    let result= {"error": "Couldn't get score!"};

    res.json(result);


});

App.get("./demo1/episode/:episode", (req, res) => {

    let result= {"error": "Couldn't get number of episodes!"};

    res.json(result);

});

App.listen(port, () => {

});