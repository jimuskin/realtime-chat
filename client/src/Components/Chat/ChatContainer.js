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

import "./Style.css";

//Socket which will be initialized in useEffect. Used to emit messages.
var socket;

const ChatContainer = (props) => {
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (props.data.valid) {
			socket = socketio(
				process.env.REACT_APP_EXPRESS_SERVER_URL
			);
			let lobbyData = props.data.lobbyDetails.data[0];

			let username = props.username;

			socket.emit("lobby_connect", {
				lobbyID: lobbyData.lobbyID,
				username: username,
			});

			socket.on("server_message", (data) => {
				setMessages((prevMessage) => {
					return [
						...prevMessage,
						{
							name: data.name,
							message: data.message,
						},
					];
				});
			});

			socket.on("online_users", (data) => {
				setUsers(data);
			});

			//Disconnect the socket when the component unmounts.
			return () => socket.disconnect();
		}
	}, [props.data.valid]);

	const submitChat = (message) => {
		console.log(
			`Attempting to submit message: ${message}`
		);
		if (socket) {
			console.log(`SOCKET EXISTS!`);
			socket.emit("client_message", message);
		}
	};

	//If not connected return nothing.
	if (!props.data.connected) {
		return <> </>;
	}

	const lobbyData = props.data.lobbyDetails.data[0];

	return (
		<div className="body">
			<Paper className="lobbyName">
				<h1>{lobbyData.lobbyName}</h1>
			</Paper>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={10}>
					<Paper className="chat container">
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

					<MessageBar onSubmit={submitChat} />
				</Grid>

				<Grid item xs={12} sm={2}>
					<Paper className="online-users container">
						<h1>Online Users</h1>
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
