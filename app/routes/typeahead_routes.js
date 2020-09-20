const sort_dict = require('../helpers/sort_dict');

module.exports = function(app) {
	app.post('/typeahead', (req, res) => {
		const result = structure.update_word(req.body.name.toLowerCase());
		if (!result) {
			res.sendStatus(400);
		} else {
			res.status(201).send(result);
		}
	})

	app.get('/typeahead', (req, res) => {
		const sorted_array = sort_dict(structure.root.possible_words);
		res.send(sorted_array.slice(0, 5));
	})

	app.get('/typeahead/:prefix', (req, res) => {
		const prefix = req.params.prefix;
		const {
			word,
			popularity,
			possible_words,
		} = structure.find_word(prefix.toLowerCase());
		const sorted_array = sort_dict(possible_words);
		if (popularity) {
			sorted_array.unshift({ name: word, times: popularity});
		}
		res.send(sorted_array.slice(0, 5))
	})
}
