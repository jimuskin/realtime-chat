const randomstring = require("randomstring");

const lobbySchema = require("../mongo/Schemas/lobbySchema");

const deleteLobby = (req, res) => {
	const roomID = req.body.roomID;

	console.log(roomID);

	if (!roomID) {
		res.status(404).json({
			error: "ID does not exist.",
		});
		return;
	}

	lobbySchema.deleteOne(
		{ lobbyID: roomID },
		(error, lobbyData) => {
			if (error) {
				res.status(500).json({
					error: "An unexpected error occurred.",
				});
				return;
			}

			if (lobbyData.deletedCount == 0) {
				res.status(404).json({
					message: `Unable to find lobby ID (${roomID})`,
				});
				return;
			} else if (lobbyData.deletedCount > 0) {
				res.status(200).json({
					success: true,
				});
				return;
			}
		}
	);
};

module.exports = deleteLobby;
