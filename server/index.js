const app = require("express")();

const setupExpress = require("./setup/setupExpress");
const setupMongo = require("./setup/setupMongo");
const setupRedis = require("./setup/setupRedis");
const setupSocketIO = require("./setup/setupSocketIO");

const SocketIOManager = require("./socketio/socketIOManager");

const setupServer = async () => {
	console.log("Initiating the setup sequence.");

	//Set up mongoDB connection.
	let mongoSuccess = await setupMongo();
	console.log(`Setup Mongo Success? ${mongoSuccess}`);

	//Set up Redis connection.
	let redisSuccess = await setupRedis();
	console.log(`Setup Redis Success? ${redisSuccess}`);

	let server = await setupExpress();

	let socketIO = await setupSocketIO(server);

	SocketIOManager.io = socketIO;

	return true;
};

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

//On client get room
//Connect to database to locate room details.
// - Connect to mongo to see if room with ID exists, and get all relevant details of room
// - Connect to redis to get a list of all the previous messages sent.
//If don't exist return 404
//If exist, respond with room details, and open socketio connection to room ID (if not exists).

//On client disconnect
//Check room user count
//If users = 0, then close socketio connection.
