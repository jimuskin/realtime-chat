const lobbySchema = require("../Schemas/lobbySchema");

const retrieveMessageHistoryFromDatabase = async (
	lobbyID
) => {
	return new Promise((resolve, reject) => {
		if (!lobbyID) {
			reject({
				errorCode: 404,
				errorMessage: "LobbyID was empty.",
			});
		}

		let query = { lobbyID: lobbyID };

		let messageHistory = [];

		lobbySchema.find(query, (error, data) => {
			if (error) {
				reject({
					statusCode: 500,
					message:
						"An unexpected error occurred.",
				});
			}
			const messages = data[0].messages.toObject();

			let i = 0;

			//I wanted to use a for loop, but everything broke for some reason. Guess this will suffice...
			while (messages[0][i]) {
				messageHistory.push({
					name: messages[0][i].user,
					message: messages[0][i].message,
				});

				i++;
			}

			resolve(messageHistory);
		});
	});
};

module.exports = retrieveMessageHistoryFromDatabase;
