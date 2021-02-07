const sortDict = require('../../helpers/sort-dict');

SUGGESTION_NUMBER = process.env.SUGGESTION_NUMBER || 5;

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
	const sorted_array = sortDict(possible_words);
	if (popularity) {
		sorted_array.unshift({ name: word, times: popularity });
	}
	res.send(sorted_array.slice(0, SUGGESTION_NUMBER))
}

module.exports = get;
