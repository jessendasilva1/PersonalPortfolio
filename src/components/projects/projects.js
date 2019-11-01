import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//import NextIcon from '@material-ui/icons/NavigateNext';
//import PrevIcon from '@material-ui/icons/NavigateBefore';

import img1 from '../../images/bookSearch.png';
import img2 from '../../images/memory.png';
import img3 from '../../images/bueno-logo.png';

import './projects.css';

class Projects extends Component {

    render(){
        return(          
            <div className="projectsDiv">
                <h2 id="infoPanelHeader">Projects</h2>
                <Carousel indicators={false} pauseOnHover={true} interval={null}>
                <Carousel.Item className="carouselItem">
                    <a rel="noopener noreferrer" target="_blank" href="https://react-book-search-jessen.herokuapp.com/">
                        <img className="projects" src={img1} alt="First slide"/>
                    </a>
                    <div className="projectCaption">
                        <p className="thing">React Book Search</p>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/React-Search">
                            <p className="thing">Github/React-Search</p>
                        </a>  
                        <p className="thing">Provides users with a platform to search and save books powered by the Google Books API, Express and MongoDB}.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <a rel="noopener noreferrer" target="_blank" href="https://clicky-game-jessen.netlify.com/">
                        <img className="projects" src={img2} alt="Second slide"/>
                    </a>
                     <div className="projectCaption">
                        <p className="thing">Memory</p> 
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/clickyGame">
                            <p className="thing">Github/clickyGame</p>
                        </a>  
                        <p className="thing">Game of thrones inspiried memory game where you can only select each card once. Created using ReactJS, Javascript and the latest ES6.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <a rel="noopener noreferrer" target="_blank" href="https://project3-bueno.herokuapp.com/">
                        <img className="projects" src={img3} alt="Third slide" />
                    </a>
                    <div className="projectCaption">
                        <p className="thing">Bueno</p> 
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jessendasilva1/Bueno">
                            <p className="thing">Github/Bueno</p>
                        </a>  
                        <p className="thing">Based on the classic card game UNO! Play with up to 4 friends. Built using React, Firebase, Express, Node an Socket.io.</p>
                    </div>
                </Carousel.Item>
                </Carousel>
                
            </div>
        );
    }
}

export default Projects;
