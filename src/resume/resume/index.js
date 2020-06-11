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
				<Column title="Education">
					<p>(Miami, FL)</p>
					<br />
					<ColumnItem item={<p><abbr title="Florida International University">FIU</abbr> - Full Time Dual Enrollment</p>} subItems={
						["(2019-2020)", "GPA: 3.900/4.0", "30 College Credit Hours"]
					} />
					<ColumnItem item={<p><abbr title="TERRA Environmental Research Institute">TERRA</abbr> - High School</p>} subItems={
						["(2016-2020)", "GPA: 3.560/4.0", "13 College Credit Hours"]
					} />
					<br />
					<p><b>Notable Courses (taken at FIU):</b></p>
					<ColumnItem item={<p>MAC2312 - Calculus II (4.0)</p>} />
					<ColumnItem item={<p>PHY2049 - Physics W/ Calculus II (4.0)</p>} />
				</Column>
				<hr />

				<Column title="Skills">
					<ColumnItem item="Java" subItems={
						["1", "2"]
					} />
				</Column>
			</Fragment>
		);
	}
}
