const mongoose = require("mongoose");

const connectionDetails = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
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
			resolve(true);
		});
	});
};

module.exports = setupMongo;
