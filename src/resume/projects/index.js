// Libraries
import React from 'react';

// Components
import Section from '../components/page-section';

export default class Projects extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Projects"
		};
	}

	rendering(props) {
		return (
			<h1>hi</h1>
		);
	}
}