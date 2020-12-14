// Libraries
import React from "react";

// Components
import Profile from "../components/profile";

export default React.forwardRef((props, ref) => (
	<Profile
		name="Games"
		callToAction="Play"
		ref={ref}
		items={[
			{
				name: "Tile Game",
				pathToOpen: "tilegame",
				source: "https://github.com/ZackarySantana/TileGame/",
			},
			{
				name: "Animal Collector",
				pathToOpen: "animalcollector",
				source: "https://github.com/ZackarySantana/AnimalCollector/",
			},
			{
				name: "RPG",
				pathToOpen: "rpg",
				source: "https://github.com/ZackarySantana/RPG/",
			},
			{
				name: "Kamryn2048",
				pathToOpen: "kamryn2048",
				source: "https://github.com/ZackarySantana/Kamryn2048/",
				tba: true,
			},
		]}
	/>
));
