const mongoose = require("mongoose");

const schema = {
	lobbyID: {
		type: String,
		require: true,
	},
	lobbyName: {
		type: String,
		require: true,
	},
};

module.exports = mongoose.model("lobbyDetails", schema);
