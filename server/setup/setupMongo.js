const mongoose = require("mongoose");

const startLobbyDeleteTimer = require("../mongo/lobbyDeleteTimer");

const connectionDetails = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

const setupMongo = async () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(
			`${process.env.MONGODB_URI}/lobbies?authSource=admin`,
			connectionDetails
		);

		mongoose.connection.on("error", (error) => {
			reject(error);
		});

		mongoose.connection.once("open", () => {
			console.log(
				"Successfully connected to MongoDB"
			);

			startLobbyDeleteTimer();
			resolve(true);
		});
	});
};

module.exports = setupMongo;
