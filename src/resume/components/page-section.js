// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
	position: relative;

	height: 100vh;
    scroll-snap-align: start;

	background-color: var(--background);
	color: var(--on-background);

	@media (min-width: 1000px) {
		-webkit-clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
		clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
	}

	@media (max-width: 1000px) {
		-webkit-clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
		clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
	}
`;

const Polygon = styled.div`
	overflow: visible;

	&.noTitle {
		padding-top: 20vh;
	}

	@media (min-width: 1000px) {
		padding: 0 20vw 0 20vw;
		height: 80vh;
	}
	
	@media (max-width: 1000px) {
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

	&.long {
		height: 10vh;
		align-items: flex-start;
	}

	h1 {
		margin: 0;
	}
`;

const Content = styled.div`
	overflow: visible;

	@media (min-width: 1000px) {
		height: 60vh;

		&.long {
			height: 90vh;
		}
	}
	
	@media (max-width: 600px) {
		height: 70vh;
	}
`;

export default class PageSection extends React.Component {

	static propTypes = {
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
		id: PropTypes.string,
		hideTitle: PropTypes.bool,
		long: PropTypes.bool
	}

	constructor(props) {
		super(props);

		this.state = {
			...props
		}
	}

	componentDidMount() {
		if (typeof this.state.title !== "string" || this.state.id) {
			this.setState({ idPrefix: this.state.id });
		} else {
			this.setState({ idPrefix: this.state.title.replace(/\s+/g, '-').toLowerCase() });
		}
	}

	render() {
		return (
			<Section id={this.state.idPrefix + "-section"}>
				<Polygon className={!this.state.hideTitle ? "" : "noTitle"}>
					{!this.state.hideTitle &&
						<TitleWrapper id={this.state.idPrefix + "-titleWrapper"} className={!this.state.long ? "" : "long"}>
							{typeof this.state.title === "string" &&
								<h1 id={this.state.idPrefix + "-title"}>
									{this.state.title}
								</h1>
							}
							{typeof this.state.title !== "string" &&
								this.state.title
							}
						</TitleWrapper>
					}
					<Content id={this.state.idPrefix + "-content"} className={!this.state.long ? "" : "long"}>
						{this.props.children}
					</Content>
				</Polygon>
			</Section>
		);
	}
}
