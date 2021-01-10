import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./Style.css";

const CloseRoomButton = (props) => {
	const history = useHistory();

	const handleCloseButtonClick = (event) => {
		event.preventDefault();
		const bodyParams = {
			roomID: props.lobbyID,
		};

		const deleteRoomURL = `http://${process.env.REACT_APP_EXPRESS_SERVER_URL}/room/delete`;

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

		const deleteLobby = async () => {
			const response = await fetch(deleteRoomURL, {
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

			history.push({
				pathname: `/`,
				state: {
					error: `You have successfully closed this room. (${props.lobbyID})`,
				},
			});
		};

		deleteLobby().catch((error) => {
			console.log(error);
		});
	};

	return (
		<Button
			variant="contained"
			color="primary"
			className="close-room-button"
			onClick={handleCloseButtonClick}
		>
			Close Room
		</Button>
	);
};

export default CloseRoomButton;
