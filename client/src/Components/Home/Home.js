import React from "react";

import { Grid, TextField, Paper } from "@material-ui/core";

import JoinRoomForm from "./JoinRoomForm";
import CreateRoomForm from "./CreateRoomForm";

const Home = () => {
	return (
		<Grid
			container
			spacing={10}
			direction="row"
			justify="center"
			alignItems="center"
			style={{ minHeight: "50vh" }}
		>
			<Grid item>
				<Paper>
					<CreateRoomForm />
				</Paper>
			</Grid>

			<Grid item>
				<Paper>
					<JoinRoomForm />
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Home;
