// Libraries
import React, { Fragment, Suspense } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import ProjectCard from './project-card';

// Icons
const Games = React.lazy(() => import('../../resources/images/games'));
const Websites = React.lazy(() => import('../../resources/images/websites'));

export default class Projects extends Section {

	constructor(props) {
		super(props, "Projects", false, true);
	}

	rendering() {
		return (
			<Fragment>
				<ProjectCard>
					<Suspense fallback={<div>Loading...</div>}>
						<Games />
					</Suspense>
				</ProjectCard>
				<ProjectCard>
					<Suspense fallback={<div>Loading...</div>}>
						<Websites />
					</Suspense>
				</ProjectCard>
			</Fragment>
		);
	}
}
