import React, {Component} from "react";
import "./body.css"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : false,
            pirmas: "pirmas",
            antras: "antras",
            trecias: "trecias",
            buttonList: "buttonList"
        }
    }

    changeDiv(){
        if (this.state.list) {
            setTimeout(() => { this.setState({pirmas: "pirmas1",antras: "antras1",
                trecias: "trecias1", buttonList: "buttonList1"}) }, 1000)
            return <div className="listDiv">
                <ul className="list">
                    <li className={this.state.pirmas} >This is first list item</li>
                    <li className={this.state.antras}>This is something else</li>
                    <li className={this.state.trecias}>This is... "I am out of ideas" </li>
                </ul>
                <button className={this.state.buttonList} onClick={()=> this.setState({list:false,pirmas: "pirmas",
                    antras: "antras", trecias: "trecias", buttonList: "buttonList"})/this.changeDiv()}>View Less</button>
            </div>
        } if (!this.state.list) {
            return <div className="bodyR">
                <p className="p">Press for something interesting!</p>
                <button className="button" onClick={()=> this.setState({list:true,pirmas: "pirmas",antras: "antras",
                    trecias: "trecias", buttonList: "buttonList"})/this.changeDiv()}>View more</button>
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