const app = require("express")();

const redis = require("redis");
const client = redis.createClient(6000, "192.168.205.145");

client.on("connect", () => {
	console.log("Connected to redis server.");
	client.get("login", (err, reply) => {
		const loginAttempts = reply ? reply : 0;

		console.log(`Connected ${loginAttempts} times.`);

		client.set("login", parseInt(loginAttempts) + 1);
	});
});

client.on("error", () => {
	console.log("An error occurred");
});

app.get("/", (req, res) => {
	res.json({ message: "its working!" });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
	console.log(`App is listening on port ${port}`)
);
