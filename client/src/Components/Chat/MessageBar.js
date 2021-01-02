import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const MessageBar = (props) => {
	const [message, setMessage] = useState("");

	const submitForm = () => {
		if (message === "") return;

		props.onSubmit(message);
		setMessage("");
	};

	return (
		<Grid
			container
			spacing={2}
			style={{
				marginTop: "10px",
			}}
		>
			<Grid item xs={12} sm={11}>
				<TextField
					value={message}
					style={{
						width: "100%",
					}}
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
					style={{ width: "100%" }}
					onClick={submitForm}
				>
					Send
				</Button>
			</Grid>
		</Grid>
	);
};

export default MessageBar;
