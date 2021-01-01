var users = new Map();

const connectUser = (lobbyID, userSocket) => {
	if (!users.has(lobbyID)) {
		users.set(lobbyID, []);
	}

	users.get(lobbyID).push(userSocket);
};

const disconnectUser = (lobbyID, userSocket) => {
	let newUserList = users.get(lobbyID);

	if (newUserList) {
		newUserList = newUserList.filter(
			(u) => u !== userSocket
		);

		if (!newUserList.length) {
			users.delete(lobbyID);
		} else {
			users.set(lobbyID, newUserList);
		}
	}
};

const getUsers = (lobbyID) => {
	return users.get(lobbyID);
};

module.exports = {
	connectUser: connectUser,
	disconnectUser: disconnectUser,
	getUsers: getUsers,
};
