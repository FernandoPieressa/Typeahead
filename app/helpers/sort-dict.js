/**
 * Given a word object of names and popularity, generates a sorted array with
 * its elements. The sort is by popularity in descending order, and by name in
 * ascending order if they are equal.
 *
 * @param {object} word_dict - object with names and their respective popularity
 * @returns {array} Sorted array of names and popularity
 */
module.exports = function sortDict(word_dict) {
	const sorted_array = [];
	for (const name in word_dict) {
		sorted_array.push({
			name: word_dict[name].name,
			times: word_dict[name].popularity,
		});
	}

	sorted_array.sort(function(a, b) {
    if (a.times !== b.times) {
      return b.times - a.times;
    }
    if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
	});

	return sorted_array;
};
