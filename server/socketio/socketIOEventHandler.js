const port = process.env.PORT || 8080;

const lobbyConnectEvent = require("./events/lobbyConnectEvent");
const lobbyDisconnectEvent = require("./events/lobbyDisconnectEvent");
const recieveClientMessageEvent = require("./events/recieveClientMessageEvent");

const handleSockets = (io) => {
	io.on("connection", (socket) => {
		var user = { lobbyID: "", username: "" };

		socket.on("lobby_connect", (data) => {
			lobbyConnectEvent(socket, data, user);
		});

		socket.on("disconnect", () => {
			lobbyDisconnectEvent(socket, user);
		});

		socket.on("client_message", (message) => {
			recieveClientMessageEvent(user, message);
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
