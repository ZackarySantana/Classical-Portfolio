// Libraries
import React from 'react';
import PropTypes from 'prop-types';

export default function Column(props) {
	return (
		<div className="column">
			<h2>{props.title}
				{props.description &&
					<span> {props.description}</span>
				}
			</h2>
			<ul>
				{props.children}
			</ul>
		</div>
	);
}

Column.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string
}

export function ColumnItem(props) {
	return (
		<li>
			{props.item}
			{props.subItems && props.subItems.length > 0 && <ul>
				{props.subItems.map((subItem, index) => (
					<li key={subItem + index}>{subItem}</li>
				))}
			</ul>}
		</li>
	);
}

ColumnItem.propTypes = {
	item: PropTypes.any.isRequired,
	subItems: PropTypes.array
}
