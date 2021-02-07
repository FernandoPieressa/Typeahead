const sortDict = require('../../helpers/sort-dict');

const suggestionNumber = process.env.SUGGESTION_NUMBER || 5;

/**
 * Gets the most popular names of all existing names, and orders it by
 * popularity in descending order.
 */
function getAll(req, res) {
  const sorted_array = sortDict(structure.root.possible_words);
  res.send(sorted_array.slice(0, suggestionNumber));
}

module.exports = getAll;
