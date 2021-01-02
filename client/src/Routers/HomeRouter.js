import React from "react";

import Home from "../Components/Home/Home";

const HomeRouter = (props) => {
	return (
		<Home
			error={
				props.location.state
					? props.location.state.error
					: ""
			}
		/>
	);
};

export default HomeRouter;
