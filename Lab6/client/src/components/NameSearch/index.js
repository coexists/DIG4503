import React from "react";

//class that extends
class NameSearch extends React.Component {
    readId(event) {
        event.preventDefault();
        let monName = document.querySelector("#monName");

        fetch("http://localhost:80/id/" + monName.value).then((res)=> {
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
                <input id = "monName" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default NameSearch;