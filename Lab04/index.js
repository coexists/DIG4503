const Express = require("express");
const App = Express();
const port = 80;

const People = require

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


App.listen(port, () => {
    console.log("server running");
});

//run server using node index.js
//for lab use chalk for the colors, not faker