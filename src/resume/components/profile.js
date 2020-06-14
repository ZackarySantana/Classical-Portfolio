// Libraries
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// Components
import LinkButton from './LinkButton';

const Container = styled.div`
	position: fixed;
	z-index: 4;
	top: 0;
	right: 0;

	width:100vw;
	height: 100vh;

	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	
	color: var(--on-background);

	transition: width 1s;
	
	overflow: hidden;
	filter: drop-shadow(0 0 10px black);

	&.hide {
		width: 0;
	}

	h1 {
		padding: 10px;
		margin: 0;
	}
`;

const Background = styled.div`
	content: '';
	width: 100vw;
	height: 100vh;
	position: fixed;
	
	z-index: -3;
	opacity: 1;

	transition: opacity 2s;
	transition-delay: 1s;
	background-color: rgba(0, 0, 0, .4);
	
	&.hide {
		opacity: 0;
	}
`;

const Shadow = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, .5));
`;

const Header = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: var(--background);filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, .5));

	> h1 {
		padding: 20px;
	}
`;

const Page = styled.div`
	width: 80vw;
	height: 80vh;

	display: flex;
	flex-flow: column nowrap;
	align-content: center;

	background-color: var(--background);
	clip-path: polygon(10% 0%,100% 0%,90% 28%,100% 28%,90% 56%,100% 56%,90% 84%,100% 84%,90% 100%,0% 100%,10% 84%,0% 84%,10% 56%,0% 56%,10% 28%,0% 28%);

	> div:not(:last-of-type) {
		width: 80%;
		height: 28%;

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-evenly;

		> h2 {
			width: 30%;
			font-size: 2.75rem !important;
		}


		padding: 0 10% 0 10%;
	}

	> div:last-of-type {
		width: 80%;
		height: 10%;

		padding: 0 10%;

		display: flex;
		align-items: center;
		text-align: center;
	}
`;

const Buttons = styled.div`
	height: 100%;
	padding: 0 20% 0 auto;

	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
	justify-content: space-evenly;
	
	> Button {
		margin: 2px;
		border-radius: 0 !important;
	}
`;

function Item(props) {
	if (!props.item || !(props.item.name)) {
		return (
			<h1>NA</h1>
		);
	} else {
		const { name, pathToOpen, linkToOpen, source } = props.item;
		return (
			<Fragment>
				<h2>{name}</h2>
				<Buttons>
					{pathToOpen &&
						<LinkButton to={pathToOpen}>
							{props.callToAction}
						</LinkButton>
					}

					{linkToOpen &&
						<button onClick={() => window.open(linkToOpen, "_blank")}>
							{props.callToAction}
						</button>
					}
					<button onClick={() => window.open(source, "_blank")}>
						View Source
					</button>
				</Buttons>
			</Fragment >
		);
	}
}


export default class Profile extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		callToAction: PropTypes.string.isRequired,
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
			page: 0
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
			<CSSTransition
				in={this.state.show}
				timeout={3000}
				classNames="profile"
				unmountOnExit>
				<Container>
					{console.log(this.state.show)}
					<Background className="background" onClick={() => this.hide()} />
					<Shadow>
						<Header>
							<h1>
								{this.state.name}
							</h1>
							<div></div> {/* X BUTTON */}
						</Header>
						<Page> {/* PAGE CONTAINER */}
							<div>
								<Item
									item={this.state.items[this.state.page * 3]}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div>
								<Item
									item={this.state.items[this.state.page * 3 + 1]}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div>
								<Item
									item={this.state.items[this.state.page * 3 + 2]}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div> {/* PAGE SELECTOR */}

							</div>
						</Page>
					</Shadow>
				</Container>
			</CSSTransition>
		);
	}
}
