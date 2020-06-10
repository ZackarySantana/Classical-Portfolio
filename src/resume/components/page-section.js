// Libraries
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	color: white;
`;

const Title = styled.h1`

`;

export default class PageSection extends React.Component {
	render() {
		return (
			<Section>
				<Title>
					{this.state.title}
				</Title>
				{this.rendering(this.props)}
			</Section>
		);
	}
}