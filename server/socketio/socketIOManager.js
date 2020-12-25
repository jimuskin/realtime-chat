const port = process.env.PORT || 8080;
const socketIOConnection = require("./socketIOConnection");

const emitMessage = (room, message) => {
	console.log(`Room: ${room} , Message: ${message}`);

	let io = socketIOConnection.io();

	if (io) {
		io.emit(message);
	} else {
		console.log(`Couldn't emit.`);
	}

	console.log(
		`Sending message (${message}) to room: ${room}`
	);
};

module.exports = {
	emitMessage: emitMessage,
};
