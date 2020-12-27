const express = require("express");
const createLobby = require("../controllers/CreateLobby");
const getLobby = require("../controllers/getLobby");

const router = express.Router();

router.get("/join/:id", getLobby);
router.post("/create", createLobby);

router.use("*", (req, res) => {
	res.status(404).json({
		error: "Not found.",
	});
});

module.exports = router;
