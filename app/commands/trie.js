const fs = require('fs');
const names = require('../../names');

function TrieNode() {
	this.child = {};
	this.popularity = null;
	this.possible_words = {};
}

function TrieStructure() {
	this.root = new TrieNode();
}

TrieStructure.prototype.add_word = function(word, popularity) {
	let node = this.root;
	for (const c of word) {
		node.possible_words[word.toLowerCase()] = { popularity, name: word }
		if (!(c in node.child)) {
			node.child[c] = new TrieNode();
		}
		node = node.child[c];
	}
	delete node.possible_words[word]
	node.popularity = popularity;
}

TrieStructure.prototype.find_word = function(word) {
	let node = this.root;
	let case_insensitive_word = ''
	for (const c of word) {
		if (!(c in node.child) && !(c.toUpperCase() in node.child)) {
			return {};
		}
		if (node.child[c]) {
			node = node.child[c];
			case_insensitive_word += c;
		} else{
			node = node.child[c.toUpperCase()]
			case_insensitive_word += c.toUpperCase();
		}
	}
	return {
		word: case_insensitive_word,
		popularity: node.popularity,
		possible_words: node.possible_words,
	};
}

TrieStructure.prototype.update_word = function(word) {
	let node = this.root;
	if (!node.possible_words[word]) {
		return false;
	}
	const name = node.possible_words[word].name;
	for (const c of word) {
		node.possible_words[word].popularity += 1;
		node = node.child[c] ? node.child[c] : node.child[c.toUpperCase()];
	}
	node.popularity += 1;
	return { name, times: node.popularity };
}

function trie_setup() {

	const trie = new TrieStructure();

	for (const name in names) {
		trie.add_word(name, names[name]);
	}

	global.structure = trie;
}

module.exports = trie_setup;
