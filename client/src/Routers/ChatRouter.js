import React from "react";
import { Redirect, useParams } from "react-router-dom";

import Chat from "../Components/Chat/Chat";

const ChatRouter = (props) => {
	let { roomId } = useParams();

	let username = props.location.state
		? props.location.state.username
		: "Anonymous";

	return <Chat roomId={roomId} username={username} />;
};

export default ChatRouter;
