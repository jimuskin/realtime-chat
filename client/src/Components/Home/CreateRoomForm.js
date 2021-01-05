import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";

const CreateRoomForm = () => {
	const [roomDetails, setRoomDetails] = useState({
		username: "",
		roomName: "",
	});
	const history = useHistory();

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setRoomDetails({
			username: "",
			roomName: "",
		});

		createNewRoom();
	};

	const createNewRoom = () => {
		const bodyParams = {
			roomName: roomDetails.roomName,
		};

		const newRoomURL = `http://${process.env.REACT_APP_EXPRESS_SERVER_URL}/room/create`;

		//Convert body params into urlencoded format.
		const formBody = Object.keys(bodyParams)
			.map((key) => {
				return (
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(bodyParams[key])
				);
			})
			.join("&");

		//Make request to create lobby.
		const postLobby = async () => {
			const response = await fetch(newRoomURL, {
				headers: {
					Accept: "application/json",
					"Content-Type":
						"application/x-www-form-urlencoded;charset=UTF-8",
				},
				method: "POST",
				body: formBody,
			});

			if (!response.ok) {
				throw new Error(response.status);
			}

			const data = await response.json();
			history.push({
				pathname: `/room/${data.lobbyID}`,
				state: {
					username: roomDetails.username,
				},
			});
		};

		postLobby().catch((error) => {
			history.push({
				pathname: `/`,
				state: {
					error: `An unexpected server error has occurred (Status Code: ${error.status})`,
				},
			});
		});
	};

	return (
		<>
			<form
				className="home-container"
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
					className="input"
				>
					Create
				</Button>
			</form>
		</>
	);
};

export default CreateRoomForm;
