import React from "react";
import {
	Box,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";

const Navbar = () => {
	return (
		<Box
			display="flex"
			p={1}
			justifyContent="center"
			alignItems="center"
			bgcolor="primary.main"
			border={1}
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
