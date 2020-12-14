// Libraries
import React, { Component } from "react";

// Styles
import "./styles.scss";

// Components
import Section from "../components/page-section";
import * as Links from "../components/links";
import { Github, LinkedIn, Email } from "../components/icons";

export default class Introduction extends Component {
	render() {
		return (
			<Section title="Introduction" hideTitle={true}>
				<h1 style={{ marginBottom: "0" }}>
					Hello,
					<br />
					I'm Zackary Santana
				</h1>
				<h2>I build amazing experiences</h2>
				<ul>
					<li>
						<button onClick={Links.scrollToResume}>Resume</button>
					</li>
					<li>
						<button onClick={Links.scrollToProjects}>
							My Work
						</button>
					</li>
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
