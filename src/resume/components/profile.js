// Libraries
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

// Components
import LinkButton from "./LinkButton";
import { CloseBTN } from "./icons";

const Container = styled.div`
	position: fixed;
	z-index: 4;
	top: 0;
	right: 0;

	width: 100vw;
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

	Button {
		margin: 2px;
		border-radius: 0 !important;
	}
`;

const Background = styled.div`
	content: "";
	width: 100vw;
	height: 100vh;
	position: fixed;

	z-index: -3;
	opacity: 1;

	transition: opacity 2s;
	transition-delay: 1s;
	background-color: rgba(0, 0, 0, 0.4);

	&.hide {
		opacity: 0;
	}
`;

const Shadow = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.5));
`;

const Header = styled.div`
	width: fit-content;
	height: fit-content;

	display: flex;
	flex-flow: row nowrap;

	background-color: var(--background);

	> h1 {
		padding: 20px;
	}

	svg {
		width: 100px;
		height: auto;
		cursor: pointer;
	}
`;

const Page = styled.div`
	width: 80vw;
	height: 80vh;

	display: flex;
	flex-flow: column nowrap;
	align-content: center;

	background-color: var(--background);
	clip-path: polygon(
		10% 0%,
		100% 0%,
		90% 28%,
		100% 28%,
		90% 56%,
		100% 56%,
		90% 84%,
		100% 84%,
		90% 100%,
		0% 100%,
		10% 84%,
		0% 84%,
		10% 56%,
		0% 56%,
		10% 28%,
		0% 28%
	);

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
		justify-content: space-evenly;
	}
`;

const Buttons = styled.div`
	height: 100%;
	padding: 0 20% 0 auto;

	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
	justify-content: space-evenly;
`;

function Item(props) {
	if (!props.item || !props.item.name) {
		return <Fragment />;
	} else {
		const { name, pathToOpen, linkToOpen, source, tba } = props.item;
		return (
			<Fragment>
				<h2>{name}</h2>
				<Buttons>
					{!tba && (
						<Fragment>
							{pathToOpen && (
								<LinkButton to={pathToOpen}>
									{props.callToAction}
								</LinkButton>
							)}

							{linkToOpen && (
								<button
									onClick={() =>
										window.open(linkToOpen, "_blank")
									}
								>
									{props.callToAction}
								</button>
							)}
							<button
								onClick={() => window.open(source, "_blank")}
							>
								View Source
							</button>
						</Fragment>
					)}
					{tba && <h1>TBA</h1>}
				</Buttons>
			</Fragment>
		);
	}
}

export default class Profile extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		callToAction: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				pathToOpen: PropTypes.string,
				linkToOpen: PropTypes.string,
				source: PropTypes.string,
				tba: PropTypes.bool,
			})
		),
	};

	constructor(props) {
		super(props);

		this.state = {
			...props,
			page: 1,
			maxPage: Math.ceil(props.items.length / 3),
		};
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
				unmountOnExit
			>
				<Container>
					<Background
						className="background"
						onClick={() => this.hide()}
					/>
					<Shadow>
						<Header>
							<h1>{this.state.name}</h1>
							<CloseBTN onClick={() => this.hide()} />
						</Header>
						<Page>
							<div>
								<Item
									item={
										this.state.items[
											(this.state.page - 1) * 3
										]
									}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div>
								<Item
									item={
										this.state.items[
											(this.state.page - 1) * 3 + 1
										]
									}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div>
								<Item
									item={
										this.state.items[
											(this.state.page - 1) * 3 + 2
										]
									}
									callToAction={this.state.callToAction}
								/>
							</div>
							<div>
								{" "}
								{/* PAGE SELECTOR */}
								<h2>
									Page: {this.state.page}/{this.state.maxPage}
								</h2>
								<button
									disabled={this.state.page === 1}
									onClick={() =>
										this.setState({
											page: this.state.page - 1,
										})
									}
								>
									Previous Page
								</button>
								<button
									disabled={
										this.state.page >= this.state.maxPage
									}
									onClick={() =>
										this.setState({
											page: this.state.page + 1,
										})
									}
								>
									Next Page
								</button>
							</div>
						</Page>
					</Shadow>
				</Container>
			</CSSTransition>
		);
	}
}
