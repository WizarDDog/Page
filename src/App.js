import React, { Component } from 'react';
import Header from "./header/header.js";
import Body from "./body/body.js";
import Body1 from "./body1/body1.js";
import Footer from "./footer/footer.js";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: "header",
        }
    }

    changeHeader(e){
        if(this.state.headerName === "header" && e.nativeEvent.deltaY > 0){
            this.setState({headerName: "header1"})
        }
        if(this.state.headerName === "header1" && e.nativeEvent.deltaY < 0){
            this.setState({headerName: "header"})
        }
    }

    handleScroll(e) {
        const heightBound = window.innerHeight * 0.8
        console.log(window.scrollY)
        if (heightBound > window.scrollY) {
            // Probably you want to load new cards?
        }
    }


        render() {
    return (
      <div className="App"  onWheel={(e)=> this.changeHeader(e)}  onScroll={(e)=>this.handleScroll(e)}>
          <div className={this.state.headerName} >
              <div id="name" >Name</div>
              <div id="about" >About</div>
              <div id="info" >Info</div>
              <div id="contact" >Contact</div>
          </div>
        < Header onScroll={this.handleScroll}/>
        < Body />
        < Body1 />
        < Footer />
      </div>
    );
  }
}

export default App;
