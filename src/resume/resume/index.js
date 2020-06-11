// Libraries
import React, { Fragment } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import Column from './column';

export default class Resume extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Resume"
		};
	}

	rendering() {
		return (
			<Fragment>
				<Column title="Education">
				</Column>
				<hr />
				<Column title="Skills">
					<li>

					</li>
				</Column>
			</Fragment>
		);
	}
}
