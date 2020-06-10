// Libraries
import React, { Fragment } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import * as Links from '../components/links';
import { Github, LinkedIn } from '../components/icons';

export default class Introduction extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "introduction",
			hideTitle: true
		};
	}

	rendering(props) {
		return (
			<Fragment>
				<h1>Hello, I'm Zackary Santana</h1>
				<ul>
					<li><button onClick={Links.scrollToResume}>Resume</button></li>
					<li><button onClick={Links.scrollToProjects}>Projects</button></li>
					<li><button onClick={Links.scrollToContactMe}>Contact Me</button></li>
					<li><Github onClick={Links.openGithub} /></li>
					<li><LinkedIn onClick={Links.openLinkedIn} /></li>
				</ul>
			</Fragment>
		);
	}
}
