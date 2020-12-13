// Libraries
import React, { Component } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import ProjectCard from './project-card';
import Games from '../components/icons/games';
import Websites from '../components/icons/websites';

export default class Projects extends Component {

	constructor(props) {
		super(props);

		this.gamesProfile = props.gamesProfile;
		this.websitesProfile = props.websitesProfile;
	}

	render() {
		return (
			<Section title="My Work" id="projects" long={true}>
				<ProjectCard name="Games" onClick={() => {
					this.gamesProfile.current.show();
				}}>
					{Games}
				</ProjectCard>
				<ProjectCard name="Websites" onClick={() => {
					this.websitesProfile.current.show();
				}}>
					{Websites}
				</ProjectCard>
			</Section>
		);
	}
}
