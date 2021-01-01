const roomManager = require("../socketIORoomManager");

const emitCurrentUsers = (io, lobby) => {
	console.log(`Current users (Lobby ID: ${lobby}):`);

	const users = roomManager.getUsers(lobby);
	for (var i = 0; i < users.length; i++) {
		let user = users[i];
		console.log(`- ${user.username}`);
	}
};

module.exports = emitCurrentUsers;
