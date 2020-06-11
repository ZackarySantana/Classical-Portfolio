// Libraries
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
    scroll-snap-align: start;

	background-color: var(--background);
	color: var(--on-background);

	@media (min-width: 600px) {
		-webkit-clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
		clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
	}

	@media (max-width: 600px) {
		-webkit-clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
		clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
	}
`;

const Polygon = styled.div`
	&.noTitle {
		padding-top: 20vh;
	}

	@media (min-width: 600px) {
		padding: 0 20vw 0 20vw;
		height: 80vh;
	}
	
	@media (max-width: 600px) {
		padding: 0;
		height: 90vh;
	}
`;

const TitleWrapper = styled.div`
	height: 20vh;

	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;

	@media (min-width: 600px) {
		padding: 0 10vw 0 10vw;
	}
`;

const Content = styled.div`
	overflow: hidden;

	@media (min-width: 600px) {
		height: 60vh;
	}
	
	@media (max-width: 600px) {
		height: 70vh;
	}
`;

export default class PageSection extends React.Component {

	constructor(props, title, hideTitle = false) {
		super(props);

		this.state = {
			title,
			hideTitle
		}
	}

	componentDidMount() {
		this.setState({ idPrefix: this.state.title.replace(/\s+/g, '-').toLowerCase() });
	}

	render() {
		return (
			<Section id={this.state.idPrefix + "-section"}>
				<Polygon className={!this.state.hideTitle ? "" : "noTitle"}>
					{!this.state.hideTitle &&
						<TitleWrapper id={this.state.idPrefix + "-titleWrapper"}>
							<h1 id={this.state.idPrefix + "-title"}>
								{this.state.title}
							</h1>
						</TitleWrapper>
					}
					<Content id={this.state.idPrefix + "-content"}>
						{this.rendering(this.props)}
					</Content>
				</Polygon>
			</Section>
		);
	}
}
