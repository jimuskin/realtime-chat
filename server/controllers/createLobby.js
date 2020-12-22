const randomstring = require("randomstring");

const createLobby = async (req, res) => {
	res.status(200).json({
		roomID: randomstring.generate(6),
	});
};

module.exports = createLobby;
