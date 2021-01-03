import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

import "./Style.css";

const MessageBar = (props) => {
	const [message, setMessage] = useState("");

	const submitForm = () => {
		if (message === "") return;

		props.onSubmit(message);
		setMessage("");
	};

	return (
		<Grid container spacing={2} className="message-bar">
			<Grid item xs={12} sm={11}>
				<TextField
					value={message}
					className="input"
					onInput={(e) => {
						setMessage(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							submitForm();
						}
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={1}>
				<Button
					variant="contained"
					color="primary"
					className="input"
					onClick={submitForm}
				>
					Send
				</Button>
			</Grid>
		</Grid>
	);
};

export default MessageBar;
