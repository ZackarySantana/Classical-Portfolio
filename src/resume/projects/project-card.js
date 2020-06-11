// Libraries
import React from 'react';

function ProjectCard(props) {
	return (
		<div className="card" onClick={props.onClick}>
			<div className="card-img-container">
				<img src={props.image} alt='project-card' />
			</div>
			<div className="card-content">
				<p>{props.name}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
