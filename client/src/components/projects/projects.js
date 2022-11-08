import React, { Component } from 'react';
//import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../images/bookSearchFull.jpg';
import img2 from '../../images/memory_GoT.jpg';
import img3 from '../../images/bueno-logo.png';
import img4 from '../../images/university_search.png';
import RemoveIcon from '@material-ui/icons/Remove';

import './projects.css';

class Projects extends Component {

    /*create project component for each project?*/
    render(){
        return(          
            <div className="projectsDiv" id="projectsDivId">
                <div className="projectsHeader">
                    <h2 id="infoPanelHeader">Projects</h2>
                    <RemoveIcon className="removeIcon" fontSize="large"/>
                </div>
                <div className="projectCardsDiv">
                    <div className="projectCard">

                        <div className="container">
                            <img className="projects" src={img1} alt="First slide"/>
                            <div className="projectCardOverlay">
                                <h2>React Book Search</h2>
                                <span>Provides users with a platform to search and save books powered by the Google Books API, Express and MongoDB</span>    
                                <div className="onProjectButton">
                                    <a rel="noopener noreferrer" target="_blank" href="https://react-book-search-jessen.herokuapp.com/">
                                        <button className="deployButton">Deployed</button>
                                    </a> 
                                </div>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/React-Search">
                                    <button className="deployButton">Github</button>
                                </a>    
                            </div>
                        </div>
                        
                    </div>
                    <div className="projectCard">
                        <div className="container">
                            <img className="projects" src={img2} alt="Second slide"/>
                            <div className="projectCardOverlay">
                                <h2>Memory Game</h2>
                                <span>Game of thrones inspiried memory game where you can only select each card once. Created using ReactJS, Javascript and the latest ES6</span>
                                <div className="onProjectButton">    
                                    <a rel="noopener noreferrer" target="_blank" href="https://clicky-game-jessen.netlify.com/">
                                        <button className="deployButton">Deployed</button>
                                    </a>
                                </div>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/clickyGame">
                                    <button className="deployButton">Github</button>
                                </a>     
                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <div className="container">
                            <img className="projects" src={img3} alt="Third slide"/>
                            <div className="projectCardOverlay">
                                <h2>Bueno</h2>
                                <span>Based on the classic card game UNO! Play with up to 4 friends. Built using React, Firebase, Express, Node an Socket.io</span>   
                                <div className="onProjectButton">   
                                    <a rel="noopener noreferrer" target="_blank" href="https://project3-bueno.herokuapp.com/">
                                        <button className="deployButton">Deployed</button>
                                    </a> 
                                </div>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/Bueno">
                                    <button className="deployButton">Github</button>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <div className="container">
                            <img className="projects" src={img4} alt="Fourth slide"/>
                            <div className="projectCardOverlay">
                                <h2>University Search</h2>
                                <span>Search courses at various Universities and visualize prerequisites using D3.js</span>   
                                <div className="onProjectButton">   
                                    <a rel="noopener noreferrer" target="_blank" href="">
                                        <button disabled className="deployButton">Deployed</button>
                                    </a> 
                                </div>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/UniveristySearch">
                                    <button className="deployButton">Github</button>
                                </a>    
                            </div>
                        </div>
                    </div>
                </div>
               
                
            </div>
        );
    }
}

export default Projects;