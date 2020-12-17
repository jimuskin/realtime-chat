import React, { useState } from "react";

import { TextField, Button, Grid } from "@material-ui/core";

const CreateRoomForm = () => {
	const [roomDetails, setRoomDetails] = useState({
		username: "",
		roomName: "",
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		setRoomDetails({
			username: "",
			roomName: "",
		});
	};

	return (
		<React.Fragment>
			<form
				style={{
					paddingTop: 10,
					paddingBottom: 20,
					marginLeft: 50,
					marginRight: 50,
				}}
				onSubmit={handleFormSubmit}
			>
				<h1>Create Room</h1>
				<TextField
					label="Username"
					value={roomDetails.username}
					onInput={(e) =>
						setRoomDetails((prevDetails) => {
							return {
								...prevDetails,
								username: e.target.value,
							};
						})
					}
				/>{" "}
				<br />
				<TextField
					label="Room Name"
					value={roomDetails.roomName}
					onInput={(e) =>
						setRoomDetails((prevDetails) => {
							return {
								...prevDetails,
								roomName: e.target.value,
							};
						})
					}
				/>
				<br />
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
			<h1>Form Details:</h1>
			<p>{JSON.stringify(roomDetails)}</p>
		</React.Fragment>
	);
};

export default CreateRoomForm;
