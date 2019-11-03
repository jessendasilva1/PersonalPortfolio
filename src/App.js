import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main/main';
import Projects from './components/projects/projects';


class App extends Component {
	componentDidMount(){
		document.title = "Jessen Portfolio"
	}
	render(){
		return (
			<div id="main">
				<Main/>
				<Projects />
			</div> 
		);
	}
	
}

export default App;
