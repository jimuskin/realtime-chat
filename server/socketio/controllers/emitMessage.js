const ioConnection = require("./ioConnection");
const lobbySchema = require("../../mongo/Schemas/lobbySchema");

const emitMessage = (lobby, messageDetails) => {
	let io = ioConnection.io();

	lobbySchema.findOneAndUpdate(
		{
			lobbyID: lobby,
		},
		{
			$push: {
				"messages.0": {
					user: messageDetails.name,
					message: messageDetails.message,
				},
			},
		},
		(err, lobbyData) => {
			if (err) {
				console.log(`Error ${err.status}: ${err}`);
				return;
			}

			io.to(lobby).emit(
				"server_message",
				messageDetails
			);
		}
	);
};

module.exports = emitMessage;
