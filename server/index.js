const app = require("express")();

const MongoManager = require("./Mongo/mongoManager");

//Redis
const redis = require("redis");
const redisConnection = {
	ip: process.env.REDIS_IP || "localhost",
	port: process.env.REDIS_PORT || 6379,
};

const redisClient = redis.createClient(
	redisConnection.port,
	redisConnection.ip
);
redisClient.on("connect", () => {
	console.log("Connected to redis server.");
	redisClient.get("login", (err, reply) => {
		const loginAttempts = reply ? reply : 0;

		console.log(`Connected ${loginAttempts} times.`);

		redisClient.set(
			"login",
			parseInt(loginAttempts) + 1
		);
	});
});

redisClient.on("error", () => {
	console.log("An error occurred");
});

//Mongo
MongoManager.AddLobby({ id: "MFSDKL", name: "Foo" });

const roomRoutes = require("./routes/roomRoutes");

app.get("/", (req, res) => {
	res.json({ message: "its working!" });
});

app.use("/room", roomRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () =>
	console.log(`App is listening on port ${port}`)
);

//On client get room
//Connect to database to locate room details.
// - Connect to mongo to see if room with ID exists, and get all relevant details of room
// - Connect to redis to get a list of all the previous messages sent.
//If don't exist return 404
//If exist, respond with room details, and open socketio connection to room ID (if not exists).

//On client disconnect
//Check room user count
//If users = 0, then close socketio connection.
