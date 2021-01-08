const lobbySchema = require("../Schemas/lobbySchema");
const emitLobbyDeleted = require("../../socketio/controllers/emitLobbyDeleted");

const deleteLobbyFromDatabase = async (lobbyID) => {
	return new Promise((resolve, reject) => {
		if (!lobbyID) {
			reject({
				errorCode: 404,
				errorMessage: "LobbyID was empty.",
			});
		}

		lobbySchema.deleteOne(
			{ lobbyID: lobbyID },
			(error, lobbyData) => {
				if (error) {
					reject({
						statusCode: 500,
						message:
							"An unexpected error occurred.",
					});
				}

				if (lobbyData.deletedCount == 0) {
					reject({
						statusCode: 404,
						message: `LobbyID doesn't exist.`,
					});
				} else if (lobbyData.deletedCount > 0) {
					emitLobbyDeleted(lobbyID, {
						message: "Lobby has closed.",
					});

					resolve({
						statusCode: 200,
						message: "Success.",
					});
				}
			}
		);
	});
};

module.exports = deleteLobbyFromDatabase;
