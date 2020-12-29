import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import ChatContainer from "./ChatContainer";

const Chat = (props) => {
	const [roomData, setRoomData] = useState({
		connected: false,
		valid: false,
	});

	useEffect(() => {
		//Ping the server for room details.
		//If 404, then route to error.
		//If details exist, then get full details
		//Then get room ID and make socketio connection to room ID.
		//

		fetch(
			`http://${process.env.REACT_APP_EXPRESS_SERVER_URL}/room/join/${props.roomId}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response.json();
				}
			})
			.then((data) => {
				setRoomData((roomData) => {
					return {
						valid: true,
						connected: true,
					};
				});
			})
			.catch((err) => {
				setRoomData((roomData) => {
					return {
						valid: false,
						connected: true,
					};
				});
			});
	}, []);

	if (!roomData.valid && roomData.connected) {
		return <Redirect to="/" />;
	} else {
		return <ChatContainer />;
	}
};

export default Chat;
