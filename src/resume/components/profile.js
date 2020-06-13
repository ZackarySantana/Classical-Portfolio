// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			...props
		}
	}


	render() {
		return (
			<div>

			</div>
		);
	}
}
