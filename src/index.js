// Libraries
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
// Service Worker
import * as serviceWorker from './serviceWorker';

// Main Route
import Resume from './resume';

// Default Styles
import './styles.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class GameRoute extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...props
		}
	}

	render() {
		try {
			return (
				<Route
					path={"/" + this.state.name}
					component={require("./games/" + this.state.name + "/index.js").default}
				/>
			);
		} catch (e) {
			console.log("Game: " + this.state.name + " could not be found");
		}
		return <Fragment></Fragment>;
	}
}

function Handler({ location }) {
	return (
		<TransitionGroup className="transition-group">
			<CSSTransition
				key={location.key}
				timeout={{ enter: 500, exit: 500 }}
				classNames="fade">
				<section className="route-section">
					<Switch location={location}>
						<Route path="/" exact component={Resume} />
						<GameRoute name="tilegame" />
						<GameRoute name="animalcollector" />
						<Route component={Resume} />
					</Switch>
				</section>
			</CSSTransition>
		</TransitionGroup>
	);
}

const HandlerWithRouter = withRouter(Handler);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<HandlerWithRouter />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
