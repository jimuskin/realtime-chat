const port = process.env.PORT || 8080;
const socketio = require("socket.io");

const ioConnection = require("../socketio/controllers/ioConnection");
const socketIOEventHandler = require("../socketio/socketIOEventHandler");

const setupSocketIO = async (server) => {
	return new Promise((resolve, reject) => {
		const io = ioConnection.init(server, {
			cors: {
				origin: "*",
				methods: ["GET", "POST"],
			},
		});

		io.on("error", (error) => {
			reject(error);
		});

		socketIOEventHandler(io);
		resolve(true);
	});
};

module.exports = setupSocketIO;
