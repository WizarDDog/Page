import React, {Component} from 'react';
import "./header.css"

class Header extends Component {

    render() {
        return (
            <div className="top">
                <div className="image">{}</div>
                <img className="logo" alt="" src="https://qph.fs.quoracdn.net/main-qimg-b9acd96ce9cbc1d063f309f2ee847e48"/>
                <div className="topText" >Page in the works!</div>
            </div>
        )
    }
}


export default Header