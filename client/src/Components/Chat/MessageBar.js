import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const MessageBar = (props) => {
	return (
		<Grid
			container
			spacing={2}
			style={{
				marginTop: "10px",
			}}
		>
			<Grid item xs={12} sm={11}>
				<TextField
					style={{
						width: "100%",
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={1}>
				<Button
					variant="contained"
					color="primary"
					style={{ width: "100%" }}
				>
					Send
				</Button>
			</Grid>
		</Grid>
	);
};

export default MessageBar;
