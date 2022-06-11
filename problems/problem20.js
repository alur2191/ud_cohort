const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().split('\n');
// Write a function that takes a string substring as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).

function findWordsWithSubstring(substring){
	const wordsWithSubstring = [];
	for(let i = 0; i < words.length; i++){
		words[i].includes(substring) && wordsWithSubstring.push(words[i])
	}

	return wordsWithSubstring;
};

console.log(findWordsWithSubstring("EEKS"));