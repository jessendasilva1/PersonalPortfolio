import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
    render(){
        return(
            <div className="resumeDiv" id="resumeDivId">
                <h2>Resume</h2>  
                <br/>
                <div className="resumeInner">
                    <div className="resumeInnerDiv" id="resumeExperience">
                        <h2>Work Experience</h2>
                        <span>IMA Ltd., Waterloo, Ontario</span>
                        <span>Junior Software Developer, 05/2018 - 10/2018 (5 months)</span>
                        <br/> 
                        <span>Timeless Materials, Waterloo, Ontario</span>
                        <span>Material Manager, 04/2017 - 08/2019 (2 years, 4 month)</span>  
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
            </div>
        );
    }
}

export default Resume;