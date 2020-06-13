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
		this.state = { show: "" };
		this.mounted = false;
	}

	render() {
		return (
			<Section title="Projects" long={true}>
				<ProjectCard name="Games" onClick={() => this.setState({ show: "games" })}>
					<Suspense fallback={<div>...</div>}>
						<Games />
					</Suspense>
				</ProjectCard>
				<ProjectCard name="Websites" onClick={() => this.setState({ show: "websites" })}>
					<Suspense fallback={<div>...</div>}>
						<Websites />
					</Suspense>
				</ProjectCard>

				<GamesProfile show={this.state.show === "games"} />
				<WebsitesProfile show={this.state.show === "websites"} />
			</Section>
		);
	}
}
