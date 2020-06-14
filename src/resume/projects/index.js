// Libraries
import React, { Suspense, Component } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import ProjectCard from './project-card';
import GamesProfile from './gamesProfile';
import WebsitesProfile from './websitesProfile';

// Icons
const Games = React.lazy(() => import('../components/icons/games'));
const Websites = React.lazy(() => import('../components/icons/websites'));

export default class Projects extends Component {

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
			<Section title="Projects" long={true}>
				<ProjectCard name="Games" onClick={() => {
					this.websitesProfile.current.hide();
					this.gamesProfile.current.show();
				}}>
					<Suspense fallback={<div>...</div>}>
						<Games />
					</Suspense>
				</ProjectCard>
				<ProjectCard name="Websites" onClick={() => {
					this.gamesProfile.current.hide();
					this.websitesProfile.current.show();
				}}>
					<Suspense fallback={<div>...</div>}>
						<Websites />
					</Suspense>
				</ProjectCard>

				<GamesProfile ref={this.gamesProfile} />
				<WebsitesProfile ref={this.websitesProfile} />
			</Section >
		);
	}
}
