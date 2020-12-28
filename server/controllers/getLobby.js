const lobbySchema = require("../mongo/Schemas/lobbySchema");

const getLobby = (req, res) => {
	const id = req.params.id;

	if (!id) {
		return res.status(404).json({
			message: "Lobby ID not found.",
		});
	}

	lobbySchema.find({ lobbyID: id }, (err, data) => {
		if (err) {
			res.status(err.status).json({
				error: err,
			});
			return;
		}

		if (!(Array.isArray(data) && data.length)) {
			res.status(404).json({
				message: "Lobby ID does not exist.",
			});
			return;
		}

		res.status(200).json({
			data: data,
		});
		return;
	});
};

module.exports = getLobby;
