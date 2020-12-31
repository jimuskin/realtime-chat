const port = process.env.PORT || 8080;
const socketIOConnection = require("./socketIOConnection");

const lobbyConnectEvent = require("./events/lobbyConnectEvent");
const lobbyDisconnectEvent = require("./events/lobbyDisconnectEvent");

const handleSockets = (io) => {
	io.on("connection", (socket) => {
		var user = { lobbyID: "", username: "" };

		socket.on("lobby_connect", (data) => {
			lobbyConnectEvent(io, socket, data, user);
		});

		socket.on("disconnect", () => {
			lobbyDisconnectEvent(io, socket, user);
		});
	});

	setInterval(() => {
		io.to("ROOM").emit("message", {
			name: "Lobby",
			message: "This is a timed message.",
		});
	}, 2000);
};

module.exports = handleSockets;
