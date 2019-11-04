import React, { Component } from 'react';

import RemoveIcon from '@material-ui/icons/Remove';

import './resume.css';

class Resume extends Component {
    render(){
        return(
            <div className="resumeDiv" id="resumeDivId">
                <div className="resumeHeaderDiv">
                    <h2 id="resumeHeader">Experience</h2>
                    <RemoveIcon className="removeIcon" fontSize="large"/>
                </div>  
                <br/>
                <div className="resumeInner">
                    <div className="resumeInnerDiv" id="resumeExperience">
                        <h2>Work Experience</h2>
                        <span>IMA Ltd., Waterloo, Ontario</span>
                        <span>Junior Software Developer, 05/2018 - 10/2018 (5 months)</span>
                        <br/> 
                        <span>Timeless Materials, Waterloo, Ontario</span>
                        <span>Material Manager, 04/2017 - 09/2019 (2 years, 5 month)</span>  
                    </div> 
                    <div className="resumeInnerDiv" id="resumeEducation">
                        <h2>Education</h2>
                        <span>University of Toronto</span>
                        <span>Full Stack Web Development Bootcamp</span>
                        <span>Certification Program</span>
                        <br/>   
                        <span>University of Guelph</span>
                        <span>Software Engineering</span>
                        <span>Bachelor of Computing Degree</span>  
                        <span>Completed 2 years</span>
                    </div> 
                </div>
                <div className='viewResumeDiv'>
                    <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1f-51Z0YlQIEFPMQ3lSvkKScwRhQvB5bmgDw8C-2p96M/edit?usp=sharing">
                        <button className="viewResumeButton">View Resume</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Resume;