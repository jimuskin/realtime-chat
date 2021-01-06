const lobbySchema = require("./Schemas/lobbySchema");
const deleteLobbyFromDatabase = require("./controllers/deleteLobbyFromDatabase");

const roomManager = require("../socketio/socketIORoomManager");

const lobbyDeleteTimer = () => {
	const minutesMultiplier = 60000;

	console.log(`Initiating the Lobby Delete Timer`);

	setInterval(() => {
		let expireDate = new Date(
			Date.now() -
				process.env.AUTO_EXPIRE_LOBBY *
					minutesMultiplier
		);

		let query = { created: { $lte: expireDate } };

		lobbySchema.find(query, (err, data) => {
			data.forEach((lobby) => {
				let lobbyID = lobby.lobbyID;

				const users = roomManager.getUsers(lobbyID);

				if (!users) {
					deleteLobbyFromDB(lobbyID).catch(
						(error) => {
							console.log(
								`An error occurred when deleting Lobby (${lobbyID}): ${error.message}`
							);
						}
					);
				}
			});
		});
	}, process.env.AUTO_EXPIRE_LOBBY * minutesMultiplier);
};

const deleteLobbyFromDB = async (lobbyID) => {
	const { statusCode } = await deleteLobbyFromDatabase(
		lobbyID
	);

	console.log(
		`Deleted Lobby (${lobbyID}) (Status code: ${statusCode})`
	);
};

module.exports = lobbyDeleteTimer;
