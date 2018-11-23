import React, {Component} from "react";
import "./body1.css"

class Body1 extends Component {
    render(){
        return(
            <div className="body1">
                <div className="bodyL1">{}</div>
                <div className="bodyR1">
                    <p className="p1">This button doesnt do anything yet!</p>
                    <button className="button1" onClick={()=> console.log("click")}>View More!</button>
                </div>
            </div>
        )
    }
}

export default Body1