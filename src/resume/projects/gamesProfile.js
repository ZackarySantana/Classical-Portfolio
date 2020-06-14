// Libraries
import React from 'react';

// Components
import Profile from '../components/profile';

export default React.forwardRef((props, ref) => (
	<Profile
		name="Games"
		callToAction="Play"
		ref={ref}
		items={
			[
				{
					name: "Tile Game",
					pathToOpen: "tilegame",
					source: "https://github.com/ZackarySantana/TileGame/"
				},
				{
					name: "Animal Collector",
					pathToOpen: "animalcollector",
					source: "https://github.com/ZackarySantana/AnimalCollector/"
				}
			]
		} />
));
