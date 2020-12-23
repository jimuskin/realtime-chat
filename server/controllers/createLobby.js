const mongoManager = require("../Mongo/mongoManager");

const randomstring = require("randomstring");

const createLobby = async (req, res) => {
	const roomName = req.body.roomName || "Default Room";

	let lobbyDetails = {
		id: randomstring.generate(6),
		name: roomName,
	};

	mongoManager.AddLobby(
		lobbyDetails,
		(err, lobbyData) => {
			if (err) {
				res.status(err.status).json({
					error: err,
				});
				return;
			}

			return res.status(200).json({
				data: lobbyData,
			});
		}
	);
};

module.exports = createLobby;
