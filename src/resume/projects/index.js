// Libraries
import React, { Component, Suspense } from "react";

// Styles
import "./styles.scss";

// Components
import Section from "../components/page-section";
import ProjectCard from "./project-card";

const Games = React.lazy(() => import("../components/icons/games"));
const Websites = React.lazy(() => import("../components/icons/websites"));

class Loader extends Component {
	render() {
		return (
			<div>
				<h1>Loading....</h1>
			</div>
		);
	}
}

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.gamesProfile = props.gamesProfile;
		this.websitesProfile = props.websitesProfile;
	}

	render() {
		return (
			<Section title="My Work" id="projects" long={true}>
				<ProjectCard
					name="Games"
					onClick={() => {
						this.gamesProfile.current.show();
					}}
				>
					<Suspense fallback={<Loader />}>
						<Games />
					</Suspense>
				</ProjectCard>
				<ProjectCard
					name="Websites"
					onClick={() => {
						this.websitesProfile.current.show();
					}}
				>
					<Suspense fallback={<Loader />}>
						<Websites />
					</Suspense>
				</ProjectCard>
			</Section>
		);
	}
}
