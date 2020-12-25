const port = process.env.PORT || 8080;
const socketio = require("socket.io");

const socketIOConnection = require("../socketio/socketIOConnection");

const setupSocketIO = async (server) => {
	return new Promise((resolve, reject) => {
		const io = socketIOConnection.init(server, {});

		io.on("error", (error) => {
			reject(error);
		});

		resolve(true);
	});
};

module.exports = setupSocketIO;
