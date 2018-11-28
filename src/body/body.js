import React, {Component} from "react";
import "./body.css"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : false,
            pirmas: "pirmas",
        }
    }

    changeDiv(){
        if (this.state.list) {
            setTimeout(() => { this.setState({pirmas: "pirmas1"}) }, 1000)
            return <div className="listDiv">
                <ul className="list">
                    <li className={this.state.pirmas} >This is first list item</li>
                    <li>This is something else</li>
                    <li>This is... "I am out of ideas" </li>
                </ul>
                <button className="buttonList" onClick={()=> this.setState({list:false,pirmas: "pirmas"})/this.changeDiv()}>View more</button>
            </div>
        } if (!this.state.list) {
            return <div className="bodyR">
                <p className="p">Press for something interesting!</p>
                <button className="button" onClick={()=> this.setState({list:true})/this.changeDiv()}>View more</button>
            </div>
        }
    }


    render(){
        return(
            <div className="body">
                <div className="bodyL">{}</div>
                <div className="changeList">{this.changeDiv()}</div>
            </div>
        )
    }
}

export default Body