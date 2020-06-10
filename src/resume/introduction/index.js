// Libraries
import React from 'react';

// Components
import Section from '../components/page-section';

export default class Introduction extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Introduction"
		};
	}

	rendering(props) {
		return (
			<h1>hi</h1>
		);
	}
}