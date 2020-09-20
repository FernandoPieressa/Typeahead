module.exports = function(word_dict) {
	const sorted_array = [];
	for (const name in word_dict) {
		sorted_array.push({
			name: word_dict[name].name,
			times: word_dict[name].popularity,
		});
	}

	sorted_array.sort(function(a, b) {
		if (a.times > b.times) {
			return -1
		}
		if (a.times < b.times) {
			return 1;
		}
		if (a.times === b.times) {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
		}
	});

	return sorted_array;
};
