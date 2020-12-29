import React from "react";
import { Redirect, useParams } from "react-router-dom";

import Chat from "../Components/Chat/Chat";

const ChatRouter = () => {
	let { roomId } = useParams();

	return <Chat roomId={roomId} />;
};

export default ChatRouter;
