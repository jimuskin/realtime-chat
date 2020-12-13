import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms"> Rooms</Link>
						</li>
					</ul>
				</nav>
			</div>
			<h1>URL:</h1>
			<Switch>
				<Route path="/:roomId">
					<Id />
				</Route>
			</Switch>
		</Router>
	);
};

const Id = () => {
	let { roomId } = useParams();

	return <h3>ID: {roomId} </h3>;
};

export default App;
