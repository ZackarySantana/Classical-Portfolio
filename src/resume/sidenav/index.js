// Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
import './styles.scss';

// Components
import * as Links from '../components/links';
import { Github, LinkedIn } from '../components/icons';

const List = styled.ul`
	position: fixed;
	z-index: 3;

	top: 30vh;
	right: 0;width: calc(20vw - 7px);
	height: 35vh;

	background-color: var(--background);
	color: var(--on-background);
	filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.8));
`;

export default function SideNav() {
	return (
		<List id="sidenav">
			<li><p onClick={Links.scrollToHome}>Home</p></li>
			<li><p onClick={Links.scrollToResume}>Resume</p></li>
			<li><p onClick={Links.scrollToProjects}>Projects</p></li>
			<li><p onClick={Links.scrollToContactMe}>Contact Me</p></li>
			<li id="icons">
				<Github onClick={Links.openGithub} />
				<LinkedIn onClick={Links.openLinkedIn} />
			</li>
		</List>
	);
}
