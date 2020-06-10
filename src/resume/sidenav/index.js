// Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
import './styles.scss';

// Components
import * as Links from '../components/links';
import { Github, LinkedIn } from '../components/icons';

const List = styled.ul`
`;

export default function SideNav() {
	return (
		<List id="sidenav">
			<li><p className="link" onClick={Links.scrollToHome}>Home</p></li>
			<li><p className="link" onClick={Links.scrollToResume}>Resume</p></li>
			<li><p className="link" onClick={Links.scrollToProjects}>Projects</p></li>
			<li><p className="link" onClick={Links.scrollToContactMe}>Contact Me</p></li>
			<li id="icons">
				<Github onClick={Links.openGithub} />
				<LinkedIn onClick={Links.openLinkedIn} />
			</li>
		</List>
	);
}
