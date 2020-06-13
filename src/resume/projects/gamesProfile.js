// Libraries
import React, { Fragment } from 'react';

// Components
import Profile from '../components/profile';

export default function GamesProfile(props) {
	return (
		<Fragment>
			{props.show &&
				<Profile
					name="Games"
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
			}
		</Fragment>
	);
}
