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
	//Set auto-expire. Will delete lobby after minutes defined in env.
	created: {
		type: Date,
		default: Date.now,
	},
};

module.exports = mongoose.model("lobbyDetails", schema);
