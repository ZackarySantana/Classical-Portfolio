// Libraries
import React, { Fragment } from 'react';

// Styles
import './styles.scss';

// Components
import Section from '../components/page-section';
import Column, { ColumnItem } from './column';

export default class Resume extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Resume"
		};
	}

	rendering() {
		return (
			<Fragment>
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
					<p><b>Notable Courses (taken at FIU):</b></p>
					<ColumnItem item="PHY2049 - Physics W/ Calculus II (4.0)" />
					<ColumnItem item="MAC2312 - Calculus II (4.0)" />
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
			</Fragment>
		);
	}
}
