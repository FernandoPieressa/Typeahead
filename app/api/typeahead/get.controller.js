const sort_dict = require('../../helpers/sort_dict');

/**
 * Gets the most popular names given a specific prefix, and orders it by
 * popularity. If there is a matching name with prefix it is left as first
 * element of response.
 *
 * @param {string} req.params.prefix - prefix to filter search
 */
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
