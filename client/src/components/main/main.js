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
                </div>

            </div>
        );
    }
}

export default Main;