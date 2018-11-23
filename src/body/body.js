import React, {Component} from "react";
import "./body.css"

class Body extends Component {
    render(){
        return(
            <div className="body">
                <div className="bodyL">{}</div>
                <div className="bodyR">
                    <p className="p">Press for something interesting!</p>
                    <button className="button" onClick={()=> console.log("click")}>View more</button>
                </div>
            </div>
        )
    }
}

export default Body