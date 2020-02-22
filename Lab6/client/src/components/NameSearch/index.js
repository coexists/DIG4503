import React from "react";

 class NameSearch extends React.Component {

    readName(event) {
        event.preventDefault();
            let pokeName = document.querySelector("#monName");

            fetch("http://localhost:80/name/" + pokeName.value).then((res) =>{
                return res.json();
            }).then((processed) => {
                let resPoke = document.querySelector("#reportingArea");
                if(processed.error){
                    resPoke.innerHTML = processed.error;
                }
                else{
                    resPoke.innerHTML = processed.name;
                }
            });
        }

    render() {
        return(
            <div>
                <form onSubmit = {this.readName}>
                <p>Type in a Pokemon Name!</p>
                <input id= "monName" type="text" />
                <br />
                <button>Submit that Name!</button>
                </form>
            </div>
        );
    }

}

export default NameSearch;
