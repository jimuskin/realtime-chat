import React, { useState } from "react";

const ChatMessage = (props) => {
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {};

	return (
		<div
			style={{
				border: "1px solid #CDCDCD",
				paddingLeft: 15,
				backgroundColor: hovered ? "#A4A4A4" : "",
				cursor: "pointer",
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<p
				style={{
					marginTop: 5,
					marginBottom: 5,
					fontSize: 11,
					fontWeight: "bold",
				}}
			>
				{props.name}:
			</p>
			<p
				style={{
					marginTop: 0,
					marginBottom: 5,
					fontSize: 16,
				}}
			>
				{props.message}
			</p>
		</div>
	);
};

export default ChatMessage;
