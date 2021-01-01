import {
	Grid,
	Paper,
	TextField,
	Button,
} from "@material-ui/core";
import ChatMessage from "./ChatMessage";
import OnlineUser from "./OnlineUser";
import MessageBar from "./MessageBar";

import { useEffect, useState } from "react";
import socketio from "socket.io-client";

const ChatContainer = (props) => {
	let socket;
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (props.data.valid) {
			socket = socketio(
				process.env.REACT_APP_EXPRESS_SERVER_URL
			);
			let lobbyData = props.data.lobbyDetails.data[0];

			let username =
				prompt("Username") || "Anonymous";

			socket.emit("lobby_connect", {
				lobbyID: lobbyData.lobbyID,
				username: username,
			});

			socket.on("message", (data) => {
				addChatItem(data.name, data.message);
			});

			socket.on("online_users", (data) => {
				setUsers(data);
			});

			//Disconnect the socket when the component unmounts.
			return () => socket.disconnect();
		}
	}, [props.data.valid]);

	const addChatItem = (name, message) => {
		setMessages((prevMessage) => {
			return [
				...prevMessage,
				{
					name: name,
					message: message,
				},
			];
		});
	};

	//If not connected return nothing.
	if (!props.data.connected) {
		return <> </>;
	}

	const lobbyData = props.data.lobbyDetails.data[0];

	return (
		<div style={{ padding: 15 }}>
			<Paper
				style={{
					textAlign: "center",
				}}
			>
				<h1
					style={{
						padding: "10px",
					}}
				>
					{lobbyData.lobbyName}
				</h1>
			</Paper>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={10}>
					<Paper
						style={{
							height: "70vh",
							overflow: "auto",
							backgroundColor: "#F1F1F1",
						}}
					>
						{messages.map((message, id) => {
							return (
								<ChatMessage
									key={`message-id-${id}`}
									name={message.name}
									message={
										message.message
									}
								/>
							);
						})}
					</Paper>

					<MessageBar />
				</Grid>

				<Grid item xs={12} sm={2}>
					<Paper
						style={{
							height: "70vh",
							overflow: "auto",
						}}
					>
						<h1
							style={{
								textAlign: "center",
								borderBottom:
									"1px solid grey",
							}}
						>
							Online Users
						</h1>
						{users.map((user, id) => {
							return (
								<OnlineUser
									key={`user-id-${id}`}
									name={user}
								/>
							);
						})}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default ChatContainer;
