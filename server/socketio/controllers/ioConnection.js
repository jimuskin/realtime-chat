const socketio = require("socket.io");
var io = null;

const init = (server, params) => {
	io = socketio(server, params);
	return io;
};

const getConnection = () => {
	return io;
};

module.exports = {
	init: init,
	io: getConnection,
};
