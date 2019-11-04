import React, { Component } from 'react';

import './header.css';

class Header extends Component {

    checkSelection(event){
        var { id } = event.target;
        console.log(id);
    }

    render(){
        return(
            <div className="headerDiv">
                <a className="linkDivs" id="projects" onClick={this.props.infoPanelItem} href="#projectsDivId">Projects</a> 
                <a className="linkDivs" id="resume" onClick={this.props.infoPanelItem} href="#resumeDivId">Resume</a> 
                <a className="linkDivs" id="aboutme" onClick={this.props.infoPanelItem} href="#aboutMeDiv">About Me</a> 
                <a className="linkDivs" id="contact" onClick={this.props.infoPanelItem} href="#contactDiv">Contact</a>
            </div>
        );
    }
}

export default Header;