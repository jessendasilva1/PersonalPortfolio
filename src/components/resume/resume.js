import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
    render(){
        return(
            <div className="resumeDiv">
                <div id="resumeHeader">
                    <h1>Resume</h1>  
                </div> 
                <div className="resumeInner">
                    <div className="resumeInnerDiv" id="resumeExperience">
                        <h2>Relevant Experience</h2>
                        <span>IMA Ltd., Waterloo, Ontario</span>
                        <span>Junior Software Developer, 05/2018 - 10/2018 (5 months)</span>
                            <span> ● Responsible for building backend scripts to manipulate and extract data</span>
                            <span>● Use that data to create datasets for machine learning algorithms and for in-house statistical reference.</span>
                            <span>● Experimented briefly with react-native and creating a mobile application to aid in the on-site data collection process.</span>
                            <span>● Traveled to various US states to inventory, collect and extract the necessary information to aid in building out a workflow for the customer.</span>
                    </div> 
                    <div className="resumeInnerDiv" id="resumeEducation">
                        <h2>Education</h2>
                        <span>University of Toronto</span>
                        <span>Full Stack Web Development Bootcamp</span>
                        <span>Certification Program</span>
                        <span>    
                            A fast-paced and comprehensive dive into learning core technologies such as HTML,
                            CSS, JS, Bootstrap, Firebase, Nodejs, ReactJS, Express and MongoDB to build complex
                            web applications front end to back.
                        </span> 
                        <br/>   
                        <span>
                            University of Guelph, Guelph, Ontario
                            Software Engineering
                            Bachelor of Computing Degree
                            Completed 3 years covering various languages such as C, Python, Perl, Java and
                            Assembly while getting a firm grasp of basic computing practices and concepts such as
                            Data Structures, Operating Systems, Mathematics and best practices as a coder
                        </span>    
                    </div> 
                </div>
            </div>
        );
    }
}

export default Resume;