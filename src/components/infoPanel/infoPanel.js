import React, { Component } from 'react';
import './infoPanel.css';

class InfoPanel extends Component {
    render(){
        return(
            <div className="infoPanelDiv">
            {this.props.children}
            </div>
        );
    }
}

export default InfoPanel;