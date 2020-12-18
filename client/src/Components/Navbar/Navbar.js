import React from "react";
import { Box } from "@material-ui/core";

const Navbar = () => {
	return (
		<Box
			className="navigation"
			display="flex"
			p={1}
			justifyContent="center"
			alignItems="center"
			bgcolor="primary.main"
		>
			<h1
				style={{
					color: "white",
				}}
			>
				Realtime Chat
			</h1>
		</Box>
	);
};

export default Navbar;
