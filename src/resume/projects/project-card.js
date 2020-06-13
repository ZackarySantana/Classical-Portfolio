// Libraries
import React from 'react';
import PropTypes from 'prop-types';

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


ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

export default ProjectCard;
