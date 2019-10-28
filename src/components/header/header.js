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
                <p className="linkDivs" id="projects" onClick={this.props.infoPanelItem}>Projects</p> 
                <p className="linkDivs" id="resume" onClick={this.props.infoPanelItem}>Resume</p> 
                <p className="linkDivs" id="aboutme" onClick={this.props.infoPanelItem}>About Me</p> 
                <p className="linkDivs" id="contact" onClick={this.props.infoPanelItem}>Contact</p>
            </div>
        );
    }
}

export default Header;