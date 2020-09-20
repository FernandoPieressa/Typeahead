const fs = require('fs');
const names = require('../../names');

/**
 * Structure of a node in the Trie
 */
function TrieNode() {
	this.child = {};
	this.popularity = null;
	this.possible_words = {};
}

/**
 * Contains the main structure of Trie, with the root node
 */
function TrieStructure() {
	this.root = new TrieNode();
}

/**
 * Adds a new word with a given popularity to the Trie structure
 *
 * @param {string} word - Adds word represeting a name into trie
 * @param {string} popularity - popularity of the name to be added
 */
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

/**
 * Finds a word representing a name in Trie
 *
 * @param {string} word - word to search in trie
 * @returns {object} Object with the word in case insensitive format,
 *	its popularity, and all possible words with that word as prefix
 */
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

/**
 * Updates popularity of name by 1 in Trie structure
 *
 * @param {string} word - word to update popularity
 * @returns {object} Object with the name and its updated popularity
 */
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

/**
 * Set ups the main tree structure with the names.json file
 */
function trie_setup() {

	const trie = new TrieStructure();

	for (const name in names) {
		trie.add_word(name, names[name]);
	}

	global.structure = trie;
}

module.exports = trie_setup;
