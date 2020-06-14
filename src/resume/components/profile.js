// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Shadow = styled.div`
	filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, .5));
`;

const Header = styled.div`
	margin: auto;
	width: fit-content;
	height: fit-content;
	background-color: var(--background);filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, .5));

 	& > h1 {
		padding: 10px;
		margin: 0;
	}
`;

const Page = styled.div`
	width: 80vw;
	height: 80vh;

	background-color: var(--background);
	clip-path: polygon(10% 0%,100% 0%,90% 28%,100% 28%,90% 56%,100% 56%,90% 84%,100% 84%,90% 100%,0% 100%,10% 84%,0% 84%,10% 56%,0% 56%,10% 28%,0% 28%);
`;

let supportsPassive = false;
try {
	window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
		get: function () { return supportsPassive = true; }
	}));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

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

	preventDefault(e) {
		e.preventDefault();
	}

	preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			this.preventDefault(e);
			return false;
		}
	}

	show() {
		this.setState({ show: true });
		window.addEventListener('DOMMouseScroll', this.preventDefault, false);
		window.addEventListener(wheelEvent, this.preventDefault, wheelOpt);
		window.addEventListener('touchmove', this.preventDefault, wheelOpt);
		window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
	}

	hide() {
		this.setState({ show: false });
		window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
		window.removeEventListener(wheelEvent, this.preventDefault, wheelOpt);
		window.removeEventListener('touchmove', this.preventDefault, wheelOpt);
		window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
	}


	render(props) {
		return (
			<Container className={!this.state.show ? "hide" : ""}>
				<Shadow>
					<Header> {/* TITLE AND X BUTTON WRAPPER */}
						<h1>
							{this.state.name}
						</h1>
						<div></div> {/* X BUTTON */}
					</Header>
					<Page> {/* PAGE CONTAINER */}
						<div> {/* ITEM 1 */}

						</div>
						<div> {/* ITEM 2 */}

						</div>
						<div> {/* ITEM 3 */}

						</div>
						<div> {/* PAGE SELECTOR */}

						</div>
					</Page>
				</Shadow>
			</Container>
		);
	}
}
