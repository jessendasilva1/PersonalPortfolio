import React, { Component } from 'react';
import './infoBox.css';

class InfoBox extends Component {

    render(){
        return(
            <div className="infoBoxMain">
                <span>Hello, Im Jessen.</span>
                <p>An aspiring Full Stack Web Developer.</p>
            </div>
        );
    }
}

export default InfoBox;