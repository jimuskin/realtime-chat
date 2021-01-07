const emitMessage = require("../controllers/emitMessage");
const lobbySchema = require("../../mongo/Schemas/lobbySchema");

const recieveClientMessageEvent = (user, message) => {
	const { username, lobbyID } = user;

	lobbySchema.findOneAndUpdate(
		{
			lobbyID: lobbyID,
		},
		{
			$push: {
				"messages.0": {
					user: username,
					message: message,
				},
			},
		},
		(err, lobbyData) => {
			if (err) {
				console.log(`Error ${err.status}: ${err}`);
				return;
			}

			emitMessage(lobbyID, {
				name: username,
				message: message,
			});
		}
	);
};

module.exports = recieveClientMessageEvent;
