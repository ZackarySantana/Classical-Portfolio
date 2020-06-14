// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width:100vw;
	height: 100vh;
	background-color: white;

	&.hide {
		display: none;
	}
`;

export default class Profile extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			pathToOpen: PropTypes.string,
			linkToOpen: PropTypes.string,
			source: PropTypes.string.isRequired
		}))
	}

	constructor(props) {
		super(props);

		this.state = {
			...props,
			page: 1
		}
	}

	show() {
		this.setState({ show: true });
	}

	hide() {
		this.setState({ show: false });
	}


	render(props) {
		return (
			<Container className={!this.state.show ? "hide" : ""}>
				<h1>
					{this.state.name}
				</h1>
			</Container>
		);
	}
}
