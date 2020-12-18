import React from "react";

import { Grid, Paper } from "@material-ui/core";

const Chat = () => {
	return (
		<div style={{ padding: 15 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={10}>
					<Paper
						noWrap
						style={{ height: "80vh" }}
					></Paper>
				</Grid>
				<Grid item xs={12} sm={2}>
					<Paper>xs=12 sm=6</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Chat;
