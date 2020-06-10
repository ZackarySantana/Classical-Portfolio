// Libraries
import React, { Fragment } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import { Github, LinkedIn } from '../components/icons';

export default class Introduction extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "introduction",
			hideTitle: true
		};
	}

	scrollToResume = () => {
		let element = document.getElementById("resume-section");
		if (element) element.scrollIntoView();
	}

	scrollToProjects = () => {
		let element = document.getElementById("projects-section");
		if (element) element.scrollIntoView();
	}

	scrollToContactMe = () => {
		let element = document.getElementById("contact-me-section");
		if (element) element.scrollIntoView();
	}

	openGithub = () => {
		window.open("https://github.com/ZackarySantana/", "_blank");
	}

	openLinkedIn = () => {
		window.open("https://www.linkedin.com/in/zackary-santana-47a01b1a6", "_blank");
	}


	rendering(props) {
		return (
			<Fragment>
				<h1>Hello, I'm Zackary Santana</h1>
				<ul>
					<li><button onClick={this.scrollToResume}>Resume</button></li>
					<li><button onClick={this.scrollToProjects}>Projects</button></li>
					<li><button onClick={this.scrollToContactMe}>Contact Me</button></li>
					<li onClick={this.openGithub}><Github /></li>
					<li onClick={this.openLinkedIn}><LinkedIn /></li>
				</ul>
			</Fragment>
		);
	}
}
