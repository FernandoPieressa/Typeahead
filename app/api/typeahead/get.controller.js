const sort_dict = require('../../helpers/sort_dict');

function get(req, res) {
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
	res.send(sorted_array.slice(0, process.env.SUGGESTION_NUMBER))
}

module.exports = get;
