const lobbySchema = require("../mongo/Schemas/lobbySchema");
const deleteLobbyFromDatabase = require("../mongo/controllers/deleteLobbyFromDatabase");

const deleteLobby = (req, res) => {
	const roomID = req.body.roomID;

	if (!roomID) {
		res.status(404).json({
			error: "ID does not exist.",
		});
		return;
	}

	const deleteLobbyFromDB = async () => {
		const {
			statusCode,
			message,
		} = await deleteLobbyFromDatabase(roomID);

		res.status(statusCode).json({
			message: message,
		});
	};

	deleteLobbyFromDB().catch((error) => {
		res.status(error.statusCode).json({
			message: error.message,
		});
	});
};

module.exports = deleteLobby;
