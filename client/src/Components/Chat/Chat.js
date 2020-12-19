import React from "react";

import {
	Grid,
	Paper,
	OutlinedInput,
} from "@material-ui/core";
import ChatMessage from "./ChatMessage";

const Chat = () => {
	return (
		<div style={{ padding: 15 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={10}>
					<Paper
						noWrap
						style={{
							height: "80vh",
							overflow: "auto",
							backgroundColor: "#F1F1F1",
						}}
					>
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
					</Paper>
				</Grid>

				<Grid item xs={12} sm={2}>
					<Paper
						style={{
							height: "80vh",
							overflow: "auto",
						}}
					>
						<h1>Online Users</h1>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Chat;
