// Libraries
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
`;

export default class PageSection extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			...props
		}
	}

	render(props) {
		return (
			<Section>
				{this.rendering(props)}
			</Section>
		);
	}
}