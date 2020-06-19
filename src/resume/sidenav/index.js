// Libraries
import React, { useEffect, useState } from 'react';

// Styles
import './styles.scss';

// Components
import * as Links from '../components/links';
import { Github, LinkedIn, Email } from '../components/icons';

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
		<div id="sidenav" className={active > 0 ? "expand" : ""}>
			<ul>
				<li><p className={"link" + (active === 0 ? " active" : "")} onClick={Links.scrollToHome}>Home</p></li>
				<li><p className={"link" + (active === 1 ? " active" : "")} onClick={Links.scrollToResume}>Resume</p></li>
				<li><p className={"link" + (active === 2 ? " active" : "")} onClick={Links.scrollToProjects}>My Work</p></li>
				<li id="icons">
					<Github onClick={Links.openGithub} type="button" />
					<LinkedIn onClick={Links.openLinkedIn} type="button" />
					<Email onClick={Links.openEmail} type="button" />
				</li>
			</ul>
		</div>
	);
}
