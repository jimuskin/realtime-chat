const retrieveMessageHistoryFromDatabase = require("../../mongo/controllers/retrieveMessageHistoryFromDatabase");

const emitLobbyHistory = (lobby, socket) => {
	retrieveLobbyHistory(lobby, socket).catch((error) =>
		console.log(error)
	);
};

const retrieveLobbyHistory = async (lobbyID, socket) => {
	lobbyHistory = await retrieveMessageHistoryFromDatabase(
		lobbyID
	);

	socket.emit("lobby_history", {
		messages: lobbyHistory,
	});
};

module.exports = emitLobbyHistory;
