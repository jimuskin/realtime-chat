const express = require("express");
const createLobby = require("../controllers/createLobby");
const deleteLobby = require("../controllers/deleteLobby");
const getLobby = require("../controllers/getLobby");

const router = express.Router();

router.get("/join/:id", getLobby);
router.post("/create", createLobby);
router.post("/delete", deleteLobby);

router.use("*", (req, res) => {
	res.status(404).json({
		error: "URL Not found.",
	});
});

module.exports = router;
