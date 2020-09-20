const express = require('express')
const bodyParser = require('body-parser')
const trie_setup = require('./app/commands/trie')

const app = express();

const port = 8000;

trie_setup()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./app/routes')(app);
app.listen(port, () => {
	console.log("Listening port "+port)
})
