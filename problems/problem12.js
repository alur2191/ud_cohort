// [ ] What are all of the words that have only “U”s for vowels?

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWordsWithUvowels(){
	const wordsWithUforVowels = [];
	words.forEach(word => {
		!word.includes('A') && 
		!word.includes('E') && 
		!word.includes('I') && 
		!word.includes('O') && 
		word.includes('U') && 
		wordsWithUforVowels.push(word);
	})
	return wordsWithUforVowels;
};

console.log(findWordsWithUvowels());