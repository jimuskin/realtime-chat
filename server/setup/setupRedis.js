const redis = require("redis");
const redisConnection = {
	ip: process.env.REDIS_IP || "localhost",
	port: process.env.REDIS_PORT || 6379,
};

const setupRedis = async () => {
	return new Promise((resolve, reject) => {
		const redisClient = redis.createClient(
			redisConnection.port,
			redisConnection.ip
		);

		redisClient.on("connect", () => {
			console.log(
				"Successfully connected to the redis server."
			);

			redisClient.get("login", (err, reply) => {
				const loginAttempts = reply ? reply : 0;

				console.log(
					`Successfully logged into redis ${loginAttempts} times.`
				);

				redisClient.set(
					"login",
					parseInt(loginAttempts) + 1
				);

				resolve(true);
			});
		});

		redisClient.on("error", (error) => {
			reject(error);
		});
	});
};

module.exports = setupRedis;
