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
	messages: {
		type: [
			{
				user: {
					type: String,
				},
				message: {
					type: String,
				},
			},
		],
		default: [],
	},
	created: {
		type: Date,
		default: Date.now,
	},
};

module.exports = mongoose.model("lobbyDetails", schema);
