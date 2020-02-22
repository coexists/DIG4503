import React from "react";

//class that extends
class IdSearch extends React.Component {
    readId(event) {
        event.preventDefault();
        let monId = document.querySelector("#monId");

        fetch("http://localhost:80/id/" + monId.value).then((res)=> {
            return res.json();
        }).then((processed) => {
            let monRes = document.querySelector("#reportingArea");
            if(processed.error) {
                monRes.innerHTML = processed.error;
            }
            else {
                monRes.innerHTML = processed.name;
                 }
        });
    }
    render() {
        return(
            <div>
                <form onSubmit = {this.readId}>
                <p>Enter Pokemon ID:</p>
                <input id = "monId" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default IdSearch;