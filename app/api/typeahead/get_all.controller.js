const sort_dict = require('../../helpers/sort_dict');

function get_all(req, res) {
	const sorted_array = sort_dict(structure.root.possible_words);
	res.send(sorted_array.slice(0, process.env.SUGGESTION_NUMBER));
}

module.exports = get_all;
