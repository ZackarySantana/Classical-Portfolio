import React from 'react';

export default function column(props) {
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
