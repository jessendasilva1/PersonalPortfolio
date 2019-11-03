import React, { Component } from 'react';
import './main.css';

import GithubImage from '../../images/githubImage.png';
import LinkedinImage from '../../images/LinkedinImage.png';
import Header from '../../components/header/header';
import Resume from '../../components/resume/resume';
import Contact from '../../components/contact/contact';
import AboutMe from '../../components/aboutme/aboutme';
import Projects from '../../components/projects/projects';

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

                <div className="default">
                    <div className="infoBoxMain">
                        <p>Hello, Im Jessen.</p>
                        <p>An aspiring Full Stack Web Developer.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;