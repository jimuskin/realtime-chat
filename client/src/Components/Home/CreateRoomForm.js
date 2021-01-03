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
		fetch(
			`http://${process.env.REACT_APP_EXPRESS_SERVER_URL}/room/create`,
			{
				headers: {
					Accept: "application/json",
					"Content-Type":
						"application/x-www-form-urlencoded;charset=UTF-8",
				},
				method: "POST",
				body: formBody,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response.json();
				}
			})
			.then((data) => {
				console.log(data);
				history.push({
					pathname: `/room/${data.data.lobbyID}`,
					state: {
						username: roomDetails.username,
					},
				});
			})
			.catch((err) => {
				history.push({
					pathname: `/`,
					state: {
						error:
							"An unexpected server error has occurred.",
					},
				});
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
				>
					Create
				</Button>
			</form>
		</>
	);
};

export default CreateRoomForm;
