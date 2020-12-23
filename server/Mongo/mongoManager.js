const mongoose = require("mongoose");

const lobbySchema = require("./Schemas/lobbySchema");

const connectionDetails = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const AddLobby = async (lobbyDetails, callback) => {
	if (!lobbyDetails.id) {
		console.log("LobbyDetails id not defined.");
	}

	if (!lobbyDetails.name) {
		console.log("LobbyDetails name not defined.");
	}

	let db = mongoose.connection;
	db.on(
		"error",
		console.error.bind(console, `Connection Error:`)
	);

	// db.once("open", () => {
	const LobbyData = new lobbySchema({
		lobbyID: lobbyDetails.id,
		lobbyName: lobbyDetails.name,
	});

	LobbyData.save((err, lobbyData) => {
		//db.close();

		if (err) console.error(err);
		callback(err, lobbyData);
	});
	// });
};

module.exports = {
	AddLobby: AddLobby,
};
