const emitMessage = (io, lobby, messageDetails) => {
	io.to(lobby).emit("message", messageDetails);
};

module.exports = emitMessage;
