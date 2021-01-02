const emitMessage = require("../controllers/emitMessage");

const recieveClientMessageEvent = (io, user, message) => {
	emitMessage(io, user.lobbyID, {
		name: user.username,
		message: message,
	});
};

module.exports = recieveClientMessageEvent;
