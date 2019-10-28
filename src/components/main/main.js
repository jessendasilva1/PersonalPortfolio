import React, { Component } from 'react';
import desktopImage from '../../images/background_portfolio3.jpg'
import './main.css';

import InfoBox from '../../components/infoBox/infoBox';
import InfoPanel from '../../components/infoPanel/infoPanel';
import Header from '../../components/header/header';
import Resume from '../../components/resume/resume';
//import Contact from '../../components/contact/contact';
//import AboutMe from '../../components/aboutme/aboutme';
import Projects from '../../components/projects/projects';

class Main extends Component {
    state = {
        currentPanel: ''
    };

    renderInfoBox = event => {
        let { id } = event.target;
        console.log("Main: " + id);
        switch(id){
            case"projects":
                this.setState({
                    currentPanel: <Projects />
                })
                break;
            case"resume":
                this.setState({
                    currentPanel: <Resume />
                })
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <div className="mainDiv" style={{backgroundImage: `url(${desktopImage})` }}>
                <div className="mainHeader">
                    <Header infoPanelItem={this.renderInfoBox}/>
                </div>
                
                <div className="panels">
                    <InfoBox />
                    <InfoPanel>
                        {this.state.currentPanel}
                    </InfoPanel>
                </div>
            </div>
        );
    }
}

export default Main;