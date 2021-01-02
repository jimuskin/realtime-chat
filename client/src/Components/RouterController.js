import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import HomeRouter from "../Routers/HomeRouter";
import ChatRouter from "../Routers/ChatRouter";

const RouterController = (props) => {
	return (
		<Router>
			<Switch>
				<Route
					path="/room/:roomId"
					render={(props) => (
						<ChatRouter {...props} />
					)}
				/>
				<Route path="/room">
					<Redirect to="/" />
				</Route>
				<Route
					path="/"
					render={(props) => (
						<HomeRouter {...props} />
					)}
				/>
			</Switch>
		</Router>
	);
};
export default RouterController;
