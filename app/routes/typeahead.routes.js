const update = require('../api/typeahead/update.controller');
const get_all = require('../api/typeahead/get_all.controller');
const get = require('../api/typeahead/get.controller');

module.exports = function(app) {
	/**
	* @swagger
	* /typeahead/
	*   post:
	*     tags:
	*     - "typeahead"
	*     description: "Updates the popularity of a name by one"
	*     operationId: "update"
	*     parameters:
	*       name:
	*         description: name to update
	*         in: body
	*         type: string
	*   responses:
	*    201:
	*       description: "Updated"
	*       schema:
	*         type: Object
	*         elements:
	*           name:
	*             description: updated name
	*         	  type: string
	*         times:
	*             description: popularity value
	*         	  type: number
	*       examples: { 'name': 'Joanna', 'times': 441 }
	*    400:
	*       description: "Bad Request"
	*   x-swagger-router-controller: "typeahead"
	*/
	app.post('/typeahead', (req, res) => {
		update(req, res);
	})

	/**
	* @swagger
	* /typeahead/
	*   post:
	*     get:
	*     - "typeahead"
	*     description: "Obtains the most popular names"
	*     operationId: "get_all"
	*   responses:
	*    200:
	*       description: "Obtained most popular names in decending order"
	*       schema:
	*         type: array
	*         elements:
	*          names_object:
	*           name:
	*             description: updated name
	*         	  type: string
	*         	times:
	*             description: popularity value
	*         	  type: number
	*       examples: [{ 'name': 'Joanna', 'times': 441 },
	*                  { 'name': 'Zena', 'times': 222 }]
	*   x-swagger-router-controller: "typeahead"
	*/
	app.get('/typeahead', (req, res) => {
		get_all(req, res);
	})

	/**
	* @swagger
	* /typeahead/
	*   post:
	*     get:
	*     - "typeahead"
	*     description: "Obtains the most popular names given a prefix"
	*     operationId: "get"
	*     parameters:
	*       prefix:
	*         description: prefix used to filter popular names
	*         in: path
	*         type: string
	*   responses:
	*    200:
	*       description: "Obtained most popular names given a prefix in decending order"
	*       schema:
	*         type: array
	*         elements:
	*          names_object:
	*           name:
	*             description: updated name
	*         	  type: string
	*         	times:
	*             description: popularity value
	*         	  type: number
	*       examples: [{ 'name': 'Joanna', 'times': 441 },
	*                  { 'name': 'Zena', 'times': 222 }]
	*   x-swagger-router-controller: "typeahead"
	*/
	app.get('/typeahead/:prefix', (req, res) => {
		get(req, res);
	})
}
