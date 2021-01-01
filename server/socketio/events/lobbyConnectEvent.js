const emitCurrentUsers = require("../controllers/emitCurrentUsers");
const emitMessage = require("../controllers/emitMessage");

const roomManager = require("../socketIORoomManager");

const lobbyConnectEvent = (io, socket, data, user) => {
	//Internal referencing of user data.
	user.lobbyID = data.lobbyID;
	user.username = data.username;

	//Pass this data to the socket.
	socket.username = user.username;
	socket.join(data.lobbyID);

	//Add the socket to internal room handler.
	roomManager.connectUser(data.lobbyID, socket);

	emitMessage(io, data.lobbyID, {
		name: "Lobby",
		message: `${user.username} has connected.`,
	});

	emitCurrentUsers(io, data.lobbyID);
};

module.exports = lobbyConnectEvent;
