// Libraries
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styles
import './styles.scss';

// Components
import * as Links from '../components/links';
import { Github, LinkedIn } from '../components/icons';

const List = styled.ul`
`;

export default function SideNav() {
	const [active, setActive] = useState(0);

	useEffect(() => {
		let scroll = 0;

		const onScroll = (event) => {
			let newActive = Math.floor(window.scrollY / window.innerHeight + .4);

			if (scroll !== newActive) {
				setActive(scroll = newActive);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<List id="sidenav">
			<li><p className={"link" + (active === 0 ? " active" : "")} onClick={Links.scrollToHome}>Home</p></li>
			<li><p className={"link" + (active === 1 ? " active" : "")} onClick={Links.scrollToResume}>Resume</p></li>
			<li><p className={"link" + (active === 2 ? " active" : "")} onClick={Links.scrollToProjects}>Projects</p></li>
			<li><p className={"link" + (active === 3 ? " active" : "")} onClick={Links.scrollToContactMe}>Contact Me</p></li>
			<li id="icons">
				<Github onClick={Links.openGithub} />
				<LinkedIn onClick={Links.openLinkedIn} />
			</li>
		</List >
	);
}
