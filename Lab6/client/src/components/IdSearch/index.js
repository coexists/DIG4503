import React from "react";

class IdSearch extends React.Component{
    readId(event){
        event.preventDefault();
        let pokeId = document.querySelector("#monId");

        fetch("http://localhost:80/id/" + pokeId.value).then((res)=>{
            return res.json();
        }).then((processed) =>{
            let resPoke = document.querySelector("#reportingArea");
            if(processed.error){
                resPoke.innerHTML = processed.error;
            }
            else{
                resPoke.innerHTML = processed.name;
            }
        });
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.readId}>
                <p>Type in a Pokemon ID!</p>
                <input id = "monId" type = "text" />
                <br />
                <button>Submit that ID!</button>
                </form>
            </div>
        );
    }
}
export default IdSearch;