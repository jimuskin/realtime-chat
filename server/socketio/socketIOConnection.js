const socketio = require("socket.io");
var io = null;

module.exports = {
	io: () => {
		console.log(`Returning io: ${io}`);
		return io;
	},

	init: (server, params) => {
		io = socketio(server, params);
		console.log(`Created io: ${io}`);

		return io;
	},
};
