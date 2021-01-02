const emitMessage = (io, lobby, messageDetails) => {
	io.to(lobby).emit("server_message", messageDetails);
};

module.exports = emitMessage;
