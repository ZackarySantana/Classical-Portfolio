// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import * as Links from '../components/links';
import { Github, LinkedIn, Email } from '../components/icons';
import { Download } from '../components/icons';

// Files
import ResumeFile from '../../files/Resume.docx';

export default class Introduction extends Component {

	render() {
		return (
			<Section title="Introduction" hideTitle={true}>
				<h1>Hello,<br />I'm Zackary Santana</h1>
				<ul>
					<li>
						<button onClick={Links.scrollToResume}>Resume</button>
						<Link id="resume-download-btn" to={ResumeFile} target="_blank" download="Resume.docx">
							<Download />
						</Link>
					</li>
					<li><button onClick={Links.scrollToProjects}>Projects</button></li>
					<li className="icon-buttons">
						<Github onClick={Links.openGithub} type="button" />
						<LinkedIn onClick={Links.openLinkedIn} type="button" />
						<Email onClick={Links.openEmail} type="button" />
					</li>
				</ul>
			</Section>
		);
	}
}
