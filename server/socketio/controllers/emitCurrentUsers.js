const roomManager = require("../socketIORoomManager");
const ioConnection = require("./ioConnection");

const emitCurrentUsers = (lobby) => {
	let io = ioConnection.io();
	let usernames = [];

	const users = roomManager.getUsers(lobby);
	if (users) {
		for (let i = 0; i < users.length; i++) {
			usernames.push(users[i].username);
		}
	}

	io.to(lobby).emit("online_users", usernames);
};

module.exports = emitCurrentUsers;
