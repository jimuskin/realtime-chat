import React, { useState } from "react";
import "./Style.css";

const ChatMessage = (props) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="chat-message"
			style={{
				backgroundColor: hovered ? "#A4A4A4" : "",
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<p className="username">{props.name}:</p>
			<p className="message">{props.message}</p>
		</div>
	);
};

export default ChatMessage;
