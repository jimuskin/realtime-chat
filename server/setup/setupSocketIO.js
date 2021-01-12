const port = process.env.PORT || 8080;
const socketio = require("socket.io");

const ioConnection = require("../socketio/controllers/ioConnection");
const socketIOEventHandler = require("../socketio/socketIOEventHandler");
const startLobbyPingTimer = require("../timers/lobbyPingTimer");

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

		startLobbyPingTimer();

		resolve(true);
	});
};

module.exports = setupSocketIO;
