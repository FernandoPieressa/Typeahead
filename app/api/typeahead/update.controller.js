/**
 * Updates the popularity of a given name by 1 and returns the new popularity
 * of updated name. If the name doesn't exist it throws bad request.
 *
 * @param {string} req.body.name - name to update popularity
 */
function update(req, res) {
	const result = structure.update_word(req.body.name.toLowerCase());
	if (!result) {
		res.sendStatus(400);
	} else {
		res.status(201).send(result);
	}
}

module.exports = update;
