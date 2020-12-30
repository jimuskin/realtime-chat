const port = process.env.PORT || 8080;
const socketio = require("socket.io");

const socketIOConnection = require("../socketio/socketIOConnection");

const setupSocketIO = async (server) => {
	return new Promise((resolve, reject) => {
		const io = socketIOConnection.init(server, {
			cors: {
				origin: "*",
				methods: ["GET", "POST"],
			},
		});

		io.on("error", (error) => {
			reject(error);
		});

		io.on("connection", (socket) => {
			console.log(`New client connected.`);

			io.sockets.emit("message", {
				name: "Lobby",
				message: "A new client has connected.",
			});
		});

		setInterval(() => {
			io.sockets.emit("message", {
				name: "Lobby",
				message: "This is a timed message.",
			});
		}, 2000);

		resolve(true);
	});
};

module.exports = setupSocketIO;
