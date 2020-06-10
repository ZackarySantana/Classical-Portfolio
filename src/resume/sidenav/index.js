// Libraries
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	z-index: 3;

	top: 30vh;
	right: 0;width: calc(20vw - 7px);
	height: 35vh;

	background-color: var(--background);
	color: var(--on-background);
	filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.8));
`;

export default class Resume extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "Resume"
		};
	}

	render(props) {
		return (
			<Container>
				<ul>

				</ul>
			</Container>
		);
	}
}
