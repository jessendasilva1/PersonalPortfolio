import React, { Component } from 'react';

import RemoveIcon from '@material-ui/icons/Remove';

import './contact.css';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        submitButtonDisabled: true,

    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('name'));
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
                        <input className="contactInputs" placeholder="name" name="name" required></input>
                        <input className="contactInputs" placeholder="email" name="email" required></input>
                        <textarea className="contactInputs" placeholder="message" name="message" required></textarea> 
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