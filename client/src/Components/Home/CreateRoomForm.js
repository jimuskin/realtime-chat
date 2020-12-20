import React, { useState } from "react";

import { TextField, Button, Grid } from "@material-ui/core";

const CreateRoomForm = () => {
	const [roomDetails, setRoomDetails] = useState({
		username: "",
		roomName: "",
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setRoomDetails({
			username: "",
			roomName: "",
		});
	};

	return (
		<>
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
				/>
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
					onClick={() =>
						alert(JSON.stringify(roomDetails))
					}
				>
					Create
				</Button>
			</form>
		</>
	);
};

export default CreateRoomForm;
