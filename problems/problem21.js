const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().split('\n');
// Write a function that takes a string prefix as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).

function findWordsWithPrefix(prefix){
	const wordsWithPrefix = [];
	for(let i = 0; i < words.length; i++){
		words[i].startsWith(prefix) && wordsWithPrefix.push(words[i])
	}

	return wordsWithPrefix;
};

console.log(findWordsWithPrefix("UN"));