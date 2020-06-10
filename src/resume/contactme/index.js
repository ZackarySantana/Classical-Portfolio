// Libraries
import React from 'react';

// Components
import Section from '../components/page-section';

export default class ContactMe extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Contact Me"
		};
	}

	rendering(props) {
		return (
			< h1 > hi</h1 >
		);
	}
}