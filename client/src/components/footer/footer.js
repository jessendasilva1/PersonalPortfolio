import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {

    render(){
        return(
            <div className="footer">
               <span id="footerName">Jessen Dasilva <span id="footerDate">@2022</span></span>
            </div>
        );
    }
}

export default Footer;