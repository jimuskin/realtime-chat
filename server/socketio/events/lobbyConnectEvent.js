const emitCurrentUsers = require("../controllers/emitCurrentUsers");
const roomManager = require("../socketIORoomManager");

const lobbyConnectEvent = (io, socket, data, user) => {
	user.lobbyID = data.lobbyID;
	user.username = data.username;
	console.log(
		`${user.username} has just connected to ${user.lobbyID}`
	);

	socket.username = user.username;
	socket.join(data.lobbyID);

	roomManager.connectUser(data.lobbyID, socket);

	io.to(data.lobbyID).emit("message", {
		name: "Lobby",
		message: `${user.username} has connected (Total Clients: ${socket.client.conn.server.clientsCount}) .`,
	});

	emitCurrentUsers(io, data.lobbyID);
};

module.exports = lobbyConnectEvent;
