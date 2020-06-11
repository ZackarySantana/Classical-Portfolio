// Libraries
import React from 'react';

function ProjectCard(props) {
	return (
		<div className="card" onClick={props.onClick}>
			<div className="card-img-container">
				{props.children}
			</div>
			<div className="card-content">
				<p>{props.name}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
