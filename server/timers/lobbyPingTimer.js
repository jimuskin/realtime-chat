const lobbySchema = require("../mongo/Schemas/lobbySchema");
const emitPing = require("../socketio/controllers/emitPing");

const lobbyPingTimer = () => {
	const secondsMultiplier = 1000;

	console.log(`Initiating the Lobby Ping Timer`);

	setInterval(() => {
		//TODO: Get a list of all lobbies, and ping each lobby.

		lobbySchema.find({}, (error, data) => {
			if (error) {
				console.log(error);
				return;
			}

			data.forEach((lobby) => {
				emitPing(lobby.lobbyID);
			});
		});
	}, process.env.LOBBY_PING_TIMER * secondsMultiplier);
};

module.exports = lobbyPingTimer;
