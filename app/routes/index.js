const typeaheadRoutes = require('./typeahead_routes');

module.exports = function(app, db) {
	typeaheadRoutes(app, db);
}
