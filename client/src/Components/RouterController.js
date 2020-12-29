import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import HomeRouter from "../Routers/HomeRouter";
import ChatRouter from "../Routers/ChatRouter";

const RouterController = () => {
	return (
		<Router>
			<Switch>
				<Route path="/room/:roomId">
					<ChatRouter />
				</Route>
				<Route path="/room">
					<Redirect to="/" />
				</Route>
				<Route path="/">
					<HomeRouter />
				</Route>
			</Switch>
		</Router>
	);
};
export default RouterController;
