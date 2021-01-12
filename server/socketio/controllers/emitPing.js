const ioConnection = require("./ioConnection");

const emitPing = (lobbyID) => {
	let io = ioConnection.io();

	io.to(lobbyID).emit("ping", true);
};

module.exports = emitPing;
