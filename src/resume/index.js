// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import Introduction from './introduction';
import Resume from './resume';
import Projects from './projects';
import ContactMe from './contactme';

const Background = styled.div`
  background-color: black;
`;

export default function resume() {
	return (
		<Background id="resume-page">
			<Introduction />
			<Resume />
			<Projects />
			<ContactMe />
		</Background>
	);
}