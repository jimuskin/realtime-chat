const app = require("express")();

const setupExpress = require("./setup/setupExpress");
const setupMongo = require("./setup/setupMongo");
const setupSocketIO = require("./setup/setupSocketIO");

const setupServer = async () => {
	//Set up mongoDB connection.
	let mongoSuccess = await setupMongo();

	let server = await setupExpress();

	let socketIO = await setupSocketIO(server);

	return true;
};

//Server setup
setupServer()
	.then((success) => {
		if (success) {
			console.log(`Server successfully started.`);
		}
	})
	.catch((error) => {
		console.log(
			`An Error has occurred. Express server will not run.`
		);
		console.log(error);
	});
