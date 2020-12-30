import { Grid, Paper } from "@material-ui/core";
import ChatMessage from "./ChatMessage";
import OnlineUser from "./OnlineUser";
import { useEffect, useState } from "react";

const ChatContainer = (props) => {
	const [messages, setMessages] = useState();

	useEffect(() => {
		setMessages([
			{
				name: "Jimmy",
				message: "This is test message 1",
			},
			{
				name: "Pete",
				message: "This is test message 2.",
			},
		]);

		setTimeout(() => {
			for (let i = 0; i < 100; i++) {
				addChatItem(
					`User ${i}`,
					`This is message ID ${i}`
				);
			}
		}, 1000);
	}, []);

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
						<OnlineUser name="User1" />
						<OnlineUser name="User2" />
						<OnlineUser name="User3" />
						<OnlineUser name="User4" />
						<OnlineUser name="User5" />
						<OnlineUser name="User6" />
						<OnlineUser name="User7" />
						<OnlineUser name="User8" />
						<OnlineUser name="User9" />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default ChatContainer;
