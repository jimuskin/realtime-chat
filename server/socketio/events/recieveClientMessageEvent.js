const emitMessage = require("../controllers/emitMessage");

const recieveClientMessageEvent = (user, message) => {
	emitMessage(user.lobbyID, {
		name: user.username,
		message: message,
	});
};

module.exports = recieveClientMessageEvent;
