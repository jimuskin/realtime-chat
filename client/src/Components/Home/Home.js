import React from "react";

import { Grid, TextField, Paper } from "@material-ui/core";

import JoinRoomForm from "./JoinRoomForm";
import CreateRoomForm from "./CreateRoomForm";
import ErrorContainer from "./ErrorContainer";

const Home = () => {
	return (
		<>
			{/* The grid which handles the form containers.*/}
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

			{/* The grid which handles any error messages. */}
			<Grid
				container
				spacing={10}
				alignItems="center"
				direction="column"
			>
				<ErrorContainer message="Lobby ID does not exist." />
				<ErrorContainer message="Username is invalid." />
				<ErrorContainer message="Lobby has closed." />
			</Grid>
		</>
	);
};

export default Home;
