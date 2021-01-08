const emitMessage = require("../controllers/emitMessage");

const recieveClientMessageEvent = (user, message) => {
	const { username, lobbyID } = user;

	emitMessage(lobbyID, {
		name: username,
		message: message,
	});
};

module.exports = recieveClientMessageEvent;
