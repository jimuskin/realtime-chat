const mongoose = require("mongoose");

const lobbySchema = require("./Schemas/lobbySchema");

const connectionDetails = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const AddLobby = async (lobbyDetails) => {
	mongoose.connect(
		`${process.env.MONGODB_URI}/lobbies?authSource=admin`,
		connectionDetails
	);

	let db = mongoose.connection;
	db.on(
		"error",
		console.error.bind(console, `Connection Error:`)
	);

	db.once("open", () => {
		const Lobby = mongoose.model("lobby", lobbySchema);

		const LobbyData = new Lobby({
			lobbyID: lobbyDetails.id,
			lobbyName: lobbyDetails.name,
		});

		LobbyData.save((err, lobbyData) => {
			if (err) return console.error(err);

			console.log(
				`Should be pushing lobby data: ${JSON.stringify(
					lobbyDetails
				)}`
			);
		});
	});
};

const Connect = async () => {
	mongoose.connect(
		process.env.MONGODB_URI,
		connectionDetails
	);

	let db = mongoose.connection;

	db.once("open", () => {
		console.log(`Connection to db successful!`);
	});

	db.on("error", (error) => {
		console.log(`An error occurred: ${error}`);
	});
};

module.exports = {
	Connect: Connect,
	AddLobby: AddLobby,
};
