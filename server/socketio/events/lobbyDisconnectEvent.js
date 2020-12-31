const lobbyDisconnectEvent = (io, socket, user) => {
	socket.removeAllListeners();
	console.log(`${user.username} has disconnected.`);
	io.to(user.lobbyID).emit("message", {
		name: "Lobby",
		message: `${user.username} has disconnected (Total Clients ${socket.client.conn.server.clientsCount}).`,
	});
};

module.exports = lobbyDisconnectEvent;
