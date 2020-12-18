import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from "react-router-dom";

import HomeRouter from "../Routers/HomeRouter";
import ChatRouter from "../Routers/ChatRouter";

const RouterController = () => {
	return (
		<Router>
			<Switch>
				<Route path="/room">
					<ChatRouter />
				</Route>
				<Route path="/">
					<HomeRouter />
				</Route>
			</Switch>
		</Router>
	);
};
export default RouterController;
