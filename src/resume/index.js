// Libraries
import React, { Component } from 'react';
import styled from 'styled-components';

// Style
import './styles.scss';

// Components
import Introduction from './introduction';
import Resume from './resume';
import Projects from './projects';
import SideNav from './sidenav';
import GamesProfile from './projects/gamesProfile';
import WebsitesProfile from './projects/websitesProfile';

const Background = styled.div`
	background-color: var(--parent-background);
`;

const Shadow = styled.div`
	filter: drop-shadow(0px 0px var(--shadow-radius) var(--shadow-color));
`;

export default class Main extends Component {

	constructor() {
		super();

		this.state = {
			show: ""
		};

		this.gamesProfile = React.createRef();
		this.websitesProfile = React.createRef();
	}

	render() {
		return (
			<Background id="resume-page">
				<GamesProfile ref={this.gamesProfile} />
				<WebsitesProfile ref={this.websitesProfile} />
				<SideNav />

				<Shadow>
					<Introduction />
					<Resume />
					<Projects gamesProfile={this.gamesProfile} websitesProfile={this.websitesProfile} />
				</Shadow>
			</Background>
		);
	}
}
