const randomstring = require("randomstring");

const lobbySchema = require("../mongo/Schemas/lobbySchema");

const createLobby = (req, res) => {
	const name = req.body.roomName || "Default Room";
	const id = randomstring.generate(6);

	const LobbyData = new lobbySchema({
		lobbyID: id,
		lobbyName: name,
	});

	LobbyData.save((err, lobbyData) => {
		if (err) {
			res.status(err.status).json({
				error: err,
			});
			return;
		}

		const { lobbyID, lobbyName, created } = lobbyData;

		return res.status(200).json({
			lobbyID: lobbyID,
			lobbyName: lobbyName,
			created: created,
		});
	});
};

module.exports = createLobby;
