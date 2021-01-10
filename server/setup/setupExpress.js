const app = require("express")();

//Middleware
const bodyParser = require("body-parser");

//Routes
const roomRoutes = require("../routes/roomRoutes");

const port = process.env.PORT || 8080;

const setupExpress = () => {
	return new Promise((resolve, reject) => {
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());

		//Allow CORS.
		app.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header(
				"Access-Control-Allow-Methods",
				"GET,POST"
			);
			res.header(
				"Access-Control-Allow-Headers",
				"Origin, X-Requested-With, Content-Type, Accept"
			);

			next();
		});

		app.use("/room", roomRoutes);

		app.get("/", (req, res) => {
			res.json({ message: "API Works." });
		});

		resolve(
			app.listen(port, () => {
				console.log(
					`Express Server is now running on port ${port}`
				);
			})
		);
	});
};

module.exports = setupExpress;
