// Libraries
import React, { Fragment, Suspense } from 'react';

// Components
import Section from '../components/page-section';

// Icons
const Games = React.lazy(() => import('../../resources/images/games'));
const Websites = React.lazy(() => import('../../resources/images/websites'));

export default class Projects extends Section {

	constructor(props) {
		super(props, "Projects");
	}

	rendering() {
		return (
			<Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Games />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<Websites />
				</Suspense>
			</Fragment>
		);
	}
}
