module.exports = function(app, db) {
	app.post('/typeahead', (req, res) => {
		console.log(req.body)
	})
}
