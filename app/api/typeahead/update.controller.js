function update(req, res) {
	const result = structure.update_word(req.body.name.toLowerCase());
	if (!result) {
		res.sendStatus(400);
	} else {
		res.status(201).send(result);
	}
}

module.exports = update;
