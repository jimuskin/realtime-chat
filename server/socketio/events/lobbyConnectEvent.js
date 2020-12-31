const lobbyConnectEvent = (io, socket, data, user) => {
	user.lobbyID = data.lobbyID;
	user.username = data.username;
	console.log(
		`${user.username} has just connected to ${user.lobbyID}`
	);

	socket.join(data.lobbyID);

	io.to(data.lobbyID).emit("message", {
		name: "Lobby",
		message: `${user.username} has connected (Total Clients: ${socket.client.conn.server.clientsCount}) .`,
	});
};

module.exports = lobbyConnectEvent;
