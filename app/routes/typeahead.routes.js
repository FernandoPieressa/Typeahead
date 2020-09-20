const update = require('../api/typeahead/update.controller');
const get_all = require('../api/typeahead/get_all.controller');
const get = require('../api/typeahead/get.controller');

module.exports = function(app) {
	app.post('/typeahead', (req, res) => {
		update(req, res);
	})

	app.get('/typeahead', (req, res) => {
		get_all(req, res);
	})

	app.get('/typeahead/:prefix', (req, res) => {
		get(req, res);
	})
}
