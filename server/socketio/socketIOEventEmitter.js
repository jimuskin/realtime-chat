const port = process.env.PORT || 8080;
const socketIOConnection = require("./socketIOConnection");

const handleSockets = (io) => {
	io.on("connection", (socket) => {
		let lobbyID = "";
		let username = "";
		console.log(
			`New Client Connected - awaiting lobby.`
		);

		socket.on("lobby_connect", (data) => {
			lobbyID = data.lobbyID;
			username = data.username;
			console.log(
				`${username} has just connected to ${lobbyID}`
			);

			socket.join(data.lobbyID);

			io.to(lobbyID).emit("message", {
				name: "Lobby",
				message: `${username} has connected (Total Clients: ${socket.client.conn.server.clientsCount}) .`,
			});
		});

		socket.on("disconnect", () => {
			socket.removeAllListeners();
			console.log(`${username} has disconnected.`);
			io.to(lobbyID).emit("message", {
				name: "Lobby",
				message: `${username} has disconnected (Total Clients ${socket.client.conn.server.clientsCount}).`,
			});
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
