// Libraries
import React, { Fragment } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';

export default class Introduction extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			contentID: "introduction"
		};
	}

	rendering(props) {
		return (
			<Fragment>
				<h1>
					Hello, I'm Zackary Santana
				</h1>
			</Fragment>
		);
	}
}
