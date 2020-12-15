import React from "react";

import { TextField, Button } from "@material-ui/core";

const JoinRoomForm = () => {
	return (
		<form
			style={{
				paddingTop: 10,
				paddingBottom: 20,
				marginLeft: 50,
				marginRight: 50,
			}}
		>
			<h1>Join Room</h1>
			<TextField label="Username" /> <br />
			<TextField label="Room ID" /> <br />
			<Button
				variant="contained"
				color="primary"
				label="Submit"
				type="submit"
				style={{
					marginTop: 15,
				}}
			>
				Submit
			</Button>
		</form>
	);
};

export default JoinRoomForm;
