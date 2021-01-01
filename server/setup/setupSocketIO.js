const port = process.env.PORT || 8080;
const socketio = require("socket.io");

const socketIOEventEmitter = require("../socketio/socketIOEventEmitter");

const setupSocketIO = async (server) => {
	return new Promise((resolve, reject) => {
		const io = socketio(server, {
			cors: {
				origin: "*",
				methods: ["GET", "POST"],
			},
		});

		io.on("error", (error) => {
			reject(error);
		});

		socketIOEventEmitter(io);
		resolve(true);
	});
};

module.exports = setupSocketIO;
