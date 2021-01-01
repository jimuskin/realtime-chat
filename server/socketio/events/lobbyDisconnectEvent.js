const roomManager = require("../socketIORoomManager");

const emitMessage = require("../controllers/emitMessage");
const emitCurrentUsers = require("../controllers/emitCurrentUsers");

const lobbyDisconnectEvent = (io, socket, user) => {
	socket.removeAllListeners();
	console.log(`${user.username} has disconnected.`);

	roomManager.disconnectUser(user.lobbyID, socket);

	emitMessage(io, user.lobbyID, {
		name: "Lobby",
		message: `${user.username} has disconnected.`,
	});

	emitCurrentUsers(io, user.lobbyID);
};

module.exports = lobbyDisconnectEvent;
