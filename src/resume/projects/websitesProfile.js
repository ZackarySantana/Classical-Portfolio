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
			]
		} />
));
