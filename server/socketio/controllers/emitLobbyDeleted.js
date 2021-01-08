const ioConnection = require("./ioConnection");
const emitMessage = (lobby, messageDetails) => {
	let io = ioConnection.io();
	io.to(lobby).emit(
		"server_lobby_deleted",
		messageDetails
	);
};

module.exports = emitMessage;
