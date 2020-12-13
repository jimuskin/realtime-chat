const app = require("express")();

app.get("/", (req, res) => {
	res.json({ message: "its working!" });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
	console.log(`App is listening on port ${port}`)
);
