import {
	Grid,
	Paper,
	OutlinedInput,
} from "@material-ui/core";
import ChatMessage from "./ChatMessage";
import OnlineUser from "./OnlineUser";

const ChatContainer = (props) => {
	return (
		<div style={{ padding: 15 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={10}>
					<Paper
						style={{
							height: "80vh",
							overflow: "auto",
							backgroundColor: "#F1F1F1",
						}}
					>
						<ChatMessage
							name="Username"
							message="Test."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Username"
							message="This is a message."
						/>
						<ChatMessage
							name="Jimmy"
							message="This is a message."
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={2}>
					<Paper
						style={{
							height: "80vh",
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
