// Libraries
import React, { Fragment, Component } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import * as Links from '../components/links';
import { Github, LinkedIn } from '../components/icons';

export default class Introduction extends Component {

	render() {
		return (
			<Section title="Introduction" hideTitle={true}>
				<h1>Hello, I'm Zackary Santana</h1>
				<ul>
					<li><button onClick={Links.scrollToResume}>Resume</button></li>
					<li><button onClick={Links.scrollToProjects}>Projects</button></li>
					<li><button onClick={Links.scrollToContactMe}>Contact Me</button></li>
					<li><Github onClick={Links.openGithub} type="button" /></li>
					<li><LinkedIn onClick={Links.openLinkedIn} type="button" /></li>
				</ul>
			</Section>
		);
	}
}
