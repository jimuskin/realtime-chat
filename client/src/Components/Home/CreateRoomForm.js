import React from "react";

import { TextField, Button, Grid } from "@material-ui/core";

const CreateRoomForm = () => {
	return (
		<form
			style={{
				paddingTop: 10,
				paddingBottom: 20,
				marginLeft: 50,
				marginRight: 50,
			}}
		>
			<h1>Create Room</h1>
			<TextField label="Username" /> <br />
			<TextField label="Room Name" /> <br />
			<Button
				variant="contained"
				color="primary"
				type="submit"
				style={{
					marginTop: 15,
				}}
			>
				Create
			</Button>
		</form>
	);
};

export default CreateRoomForm;
