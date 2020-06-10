// Libraries
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;

	background-color: var(--background);
	color: var(--on-background);

	
	-webkit-clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
	clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
`;

const Polygon = styled.div`
	padding: 0 20vw 0 20vw;
	height: 80vh;
`;

const TitleWrapper = styled.div`
	padding: 0 10vw 0 10vw;
	height: 20vh;

	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	height: fit-content;
	font-size: 4rem;
`;

const Content = styled.div`
	height: 60vh;
	overflow: hidden;
`;

export default class PageSection extends React.Component {
	render() {
		return (
			<Section>
				<Polygon>
					<TitleWrapper>
						<Title>
							{this.state.title}
						</Title>
					</TitleWrapper>
					<Content>
						{this.rendering(this.props)}
					</Content>
				</Polygon>
			</Section>
		);
	}
}