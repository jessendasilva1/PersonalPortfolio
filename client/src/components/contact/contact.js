import React, { Component } from 'react';

import RemoveIcon from '@material-ui/icons/Remove';
import axios from 'axios';

import './contact.css';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        submitButtonDisabled: true,

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let name = data.get('name');
        let email = data.get('email');
        let message = data.get('message');
        
        axios.post('/contactInfo',{
            data: {
                name: name,
                email: email,
                message: message
            }
        })
        .then((response) => {
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            //console.log("frontend" + response);
        })
        .catch(function(err){
            console.log("frontend err \n" + err);
        })
    }

    handleChange = (event) => {
        const value = event.target.value;
        //console.log("value: " + value);
        //console.log('Name: ' + event.target.name);
        this.setState({
            [event.target.name]: value
        })
    }

    render(){
        return(
            <div className="contact" id="contactDiv">
                <div className="contactHeaderDiv">
                    <h2 id="contactHeader">Contact</h2>
                    <RemoveIcon className="removeIcon" fontSize="large"/>
                </div>
                <div className="contactDiv">
                    <form className="contactCard" onSubmit={this.handleSubmit}>
                        <input className="contactInputs" placeholder="name" name="name" onChange={this.handleChange} value={this.state.name} required></input>
                        <input className="contactInputs" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} required></input>
                        <textarea className="contactInputs" placeholder="message" name="message" onChange={this.handleChange} value={this.state.message} required></textarea> 
                        <button id="submitButton" placeholder="submit">Submit</button>`
                    </form>              
                </div>
                <div id="backToTop">
                    <a href="#top"><button id="topButton" type="button">BACK TO TOP</button></a>
                </div>
            </div>
        );
    }
}

export default Contact;