// Libraries
import React, { Component } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import Column, { ColumnItem } from './column';

export default class Resume extends Component {

	render() {
		return (
			<Section title="Resume">
				<Column title="Education" description="(Miami, FL)">
					<ColumnItem item={<p><abbr title="Florida International University">FIU</abbr> - BS in Computer Science</p>}
						subItems={[
							"(2020-present)",
							"GPA: 3.900/4.0",
							"15 College Credit Hours"
						]
						} />
					<ColumnItem item={<p><abbr title="Florida International University">FIU</abbr> - Full Time Dual Enrollment</p>}
						subItems={[
							"(2019-2020)",
							"GPA: 3.900/4.0",
							"30 College Credit Hours"
						]
						} />
					<ColumnItem item={<p><abbr title="TERRA Environmental Research Institute">TERRA</abbr> - High School</p>}
						subItems={[
							"(2016-2020)",
							"GPA: 3.560/4.0",
							"13 College Credit Hours"
						]
						} />
					<br />
				</Column>
				<hr />

				<Column title="Skills">
					<ColumnItem item="Deployment"
						subItems={[
							"React",
							"Node.js",
							"Gatsby.js",
							"HTML/CSS/JavaScript"
						]
						} />
					<ColumnItem item="Version Control"
						subItems={[
							"Git"
						]
						} />
					<ColumnItem item="Programming"
						subItems={[
							"Java",
							"C++",
							"VisualBasic.net"
						]
						} />
					<ColumnItem item="Familiar with"
						subItems={[
							<abbr title="Search Engine Optimization">SEO</abbr>,
							<abbr title="Single Responsibility, Open-Closed, Liskov subsitution, Interface, Dependency">SOLID</abbr>,
							<abbr title="Object-Oriented Programming">OOP</abbr>
						]
						} />
				</Column>
			</Section >
		);
	}
}
