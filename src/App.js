import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main/main';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
	componentDidMount(){
		document.title = "Jessen Portfolio"
	}
	render(){
		return (
			<div className="main" id="top">
				<Main/>
				<Projects />
				<Contact />
				<Footer />
			</div> 
		);
	}
	
}

export default App;
