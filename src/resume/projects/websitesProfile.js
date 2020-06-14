// Libraries
import React from 'react';

// Components
import Profile from '../components/profile';

export default React.forwardRef((props, ref) => (
	<Profile
		name="Websites"
		callToAction="Open"
		ref={ref}
		items={
			[
				{
					name: "This Website",
					linkToOpen: "https://zackaryjamessantana.com/",
					source: "https://github.com/ZackarySantana/Resume/"
				},
				{
					name: "SNL Systems",
					linkToOpen: "https://snlsystems.net/",
					source: "https://github.com/ZackarySantana/SNLSystems/"
				}
			]
		} />
));
