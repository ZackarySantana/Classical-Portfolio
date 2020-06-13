// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Service Worker
import * as serviceWorker from './serviceWorker';

// Routes
import Resume from './resume';
import TileGame from './games/tilegame';
import AnimalCollector from './games/animalcollector';

// Default Styles
import './styles.css';

function Handler() {
	return (
		<Switch>
			<Route path="/" exact component={Resume} />
			<Route path="/tilegame" exact component={TileGame} />
			<Route path="/animalcollector" exact component={AnimalCollector} />
			<Route component={Resume} />
		</Switch>
	);
}

function Test() {
	return <h1>Test</h1>
}

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Handler />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
