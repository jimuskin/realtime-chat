const roomManager = require("../socketIORoomManager");

const emitMessage = require("../controllers/emitMessage");
const emitCurrentUsers = require("../controllers/emitCurrentUsers");

const lobbyDisconnectEvent = (socket, user) => {
	socket.removeAllListeners();
	roomManager.disconnectUser(user.lobbyID, socket);

	emitMessage(user.lobbyID, {
		name: "Lobby",
		message: `${user.username} has disconnected.`,
	});

	emitCurrentUsers(user.lobbyID);
};

module.exports = lobbyDisconnectEvent;
