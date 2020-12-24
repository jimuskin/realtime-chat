const port = process.env.PORT || 8080;
const io = require("socket.io");

const setupSocketIO = async (server) => {
	return new Promise((resolve, reject) => {
		const socket = io(server, {});

		socket.on("error", (error) => {
			reject(error);
		});

		resolve(socket);
	});
};

module.exports = setupSocketIO;
