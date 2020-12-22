const express = require("express");
const createLobby = require("../controllers/CreateLobby");

const router = express.Router();

router.get("/", (req, res) => {
	res.status(404).json({
		error: "Not found.",
	});
});

router.use("/create", createLobby);

module.exports = router;
