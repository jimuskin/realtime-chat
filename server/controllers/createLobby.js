const mongoManager = require("../mongo/MongoManager");

const randomstring = require("randomstring");
const SocketIOManager = require("../socketio/SocketIOManager");

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

			SocketIOManager.emitMessage(
				lobbyData.lobbyID,
				`Created Lobby (ID: ${lobbyData.lobbyName})`
			);

			return res.status(200).json({
				data: lobbyData,
			});
		}
	);
};

module.exports = createLobby;
