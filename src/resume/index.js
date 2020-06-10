// Libraries
import React from 'react';
import styled from 'styled-components';

// Style
import './styles.scss';

// Components
import Introduction from './introduction';
import Resume from './resume';
import Projects from './projects';
import ContactMe from './contactme';
import SideNav from './sidenav';

const Background = styled.div`
	background-color: var(--parent-background);
`;

const Shadow = styled.div`
	filter: drop-shadow(0px 0px var(--shadow-radius) var(--shadow-color));
`;

export default function resume() {
	return (
		<Background id="resume-page">
			<Shadow>
				<Introduction />
				<Resume />
				<Projects />
				<ContactMe />
			</Shadow>
			<SideNav />
		</Background>
	);
}
