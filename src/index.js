// Libraries
import React, { cloneElement, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Service Worker
import * as serviceWorker from "./serviceWorker";

// Main Route
import Resume from "./resume";

// Default Styles
import "./styles.css";

// Redux
import store from "./store";

function Game(name) {
	try {
		let Game = require("./games/" + name + "/index.js").default;
		return () => <Fragment>{cloneElement(<Game />, { store })}</Fragment>;
	} catch (e) {
		console.log(name + ": Could not find");
		return () => <h1>Could not find {name}</h1>;
	}
}

function Handler({ location }) {
	return (
		<>
			<TransitionGroup className="transition-group">
				<CSSTransition
					key={location.key}
					timeout={{ enter: 500, exit: 500 }}
					classNames="fade"
				>
					<section className="route-section">
						<Switch location={location}>
							<Route path="/" exact component={Resume} />
							<Route
								path={"/tilegame"}
								component={Game("tilegame")}
							/>
							<Route
								path={"/animalcollector"}
								component={Game("animalcollector")}
							/>
							<Route path={"/rpg"} component={Game("rpg")} />
							<Route component={Resume} />
						</Switch>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
}

const HandlerWithRouter = withRouter(Handler);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<HandlerWithRouter />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
