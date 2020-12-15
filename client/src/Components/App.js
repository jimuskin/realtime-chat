import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

import Home from "./Home/Home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/:roomId">
					<Id />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

const Id = () => {
	let { roomId } = useParams();

	return (
		<React.Fragment>
			<Home />
			<h3>ID: {roomId} </h3>
		</React.Fragment>
	);
};

export default App;
