import React, { Component } from 'react';
import './main.css';

import GithubImage from '../../images/githubImage.png';
import LinkedinImage from '../../images/LinkedinImage.png';
import Header from '../../components/header/header';

class Main extends Component {

    render(){
        return(
            <div className="mainDiv">
                <div className="mainHeader">
                <span id="socialSpan"> 
                    <a href="https://www.linkedin.com/in/jessen-dasilva-84677715a/" target="blank">
                        <img className="socialImage" id="linkedInImage"  src={LinkedinImage} alt="linkedInImage" />
                    </a>
                    <a href="https://github.com/jessendasilva1" target="blank">
                        <img className="socialImage" id="githubImage" src={GithubImage} alt="githubImage" />
                    </a>
                </span>
                    <Header  infoPanelItem={this.renderInfoBox}/>
                </div>

                <div className="default" id="typewriter">
                    <div className="infoBoxMain" >
                        <p className="typewriter">Hello, Im Jessen.</p>
                        <p className="typewriter">A Full Stack Web Developer.</p>
                    </div>
                    <div className='viewResumeDiv typewriter'>
                        <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1f-51Z0YlQIEFPMQ3lSvkKScwRhQvB5bmgDw8C-2p96M/edit?usp=sharing">
                            <button className="viewResumeButton">View Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;