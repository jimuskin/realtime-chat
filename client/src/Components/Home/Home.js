import React from "react";

import { Grid, Paper } from "@material-ui/core";

import JoinRoomForm from "./JoinRoomForm";
import CreateRoomForm from "./CreateRoomForm";
import ErrorContainer from "./ErrorContainer";

const Home = (props) => {
	return (
		<div style={{ padding: 40 }}>
			{/* The grid which handles the form containers.*/}
			<Grid
				container
				spacing={10}
				direction="row"
				justify="center"
				alignItems="center"
				className="home"
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
				<ErrorContainer message={props.error} />
			</Grid>
		</div>
	);
};

export default Home;
