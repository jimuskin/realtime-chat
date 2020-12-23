const app = require("express")();

//Middleware
const bodyParser = require("body-parser");

//Routes
const roomRoutes = require("../routes/roomRoutes");

const port = process.env.PORT || 8080;

const setupExpress = () => {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use("/room", roomRoutes);

	app.get("/", (req, res) => {
		res.json({ message: "API Works." });
	});

	app.listen(port, () =>
		console.log(
			`Express Server is now running on port ${port}`
		)
	);
};

module.exports = setupExpress;
