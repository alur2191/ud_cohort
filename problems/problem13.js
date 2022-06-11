// [ ] What are all of the words that have only “U”s for vowels?

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWordWithU(){
	const wordsWithU = [];
	words.forEach(word => {
		!word.includes('A') &&
		!word.includes('I') &&
		!word.includes('O') &&
		!word.includes('U') &&
		word.includes('E') &&
		word.length >= 15 &&
		wordsWithU.push(word);
	})

	return wordsWithU
};

console.log(findWordWithU());