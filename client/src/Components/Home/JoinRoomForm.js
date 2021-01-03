import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import "./Style.css";

const JoinRoomForm = () => {
	const [roomDetails, setRoomDetails] = useState({
		username: "",
		roomID: "",
	});
	const history = useHistory();

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setRoomDetails({
			username: "",
			roomID: "",
		});

		redirectUser();
	};

	const redirectUser = () => {
		history.push({
			pathname: `/room/${roomDetails.roomID}`,
			state: { username: roomDetails.username },
		});
	};

	return (
		<>
			<form
				className="home-container"
				onSubmit={handleFormSubmit}
			>
				<h1>Join Room</h1>
				<TextField
					value={roomDetails.username}
					label="Username"
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
					value={roomDetails.roomID}
					onInput={(e) =>
						setRoomDetails((prevDetails) => {
							return {
								...prevDetails,
								roomID: e.target.value,
							};
						})
					}
					label="Room ID"
				/>
				<br />
				<Button
					variant="contained"
					color="primary"
					label="Submit"
					type="submit"
					className="input"
				>
					Submit
				</Button>
			</form>
		</>
	);
};

export default JoinRoomForm;
