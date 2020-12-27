const getLobby = (req, res) => {
	const id = req.params.id;

	if (!id) {
		return res.status(404).json({
			message: "Lobby ID not found.",
		});
	}

	return res.status(200).json({
		success: true,
		id: id,
	});
};

module.exports = getLobby;
