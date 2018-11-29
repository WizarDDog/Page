import React, {Component} from "react";
import { tween } from 'popmotion';
import "./body1.css"

class Body1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.myRef = React.createRef()
    }

    some(){
        const counter = this.myRef.current
        const updateCounter = (v) => counter.innerHTML = Math.round(v);
        tween({ to: 100, duration: 2000 }).start(updateCounter)
    }
    render(){
        return(
            <div className="body1">
                <div className="bodyL1">{}</div>
                <div className="bodyR1">
                    <p className="p1">This button doesnt do anything yet!</p>
                    <button className="button1" onClick={()=> console.log("click")}>View More!</button>
                    <button className="button1" onClick={()=> this.some()}>Count to 100</button>
                    <div ref={this.myRef} >0</div>
                </div>
            </div>
        )
    }
}

export default Body1