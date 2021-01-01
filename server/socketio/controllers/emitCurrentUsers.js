const roomManager = require("../socketIORoomManager");

const emitCurrentUsers = (io, lobby) => {
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
