// What are all of the words that have at least 3 different double letters? For example, “BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E.

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

function findWordsWithDoubleLetters(){
	const wordsWithDoubleLetters = [];
	for(let i = 0; i < words.length; i++){
		let doubleLetterCounter = 0;
		for(let y = 0; y < words[i].length; y++){
			if(words[i][y] === words[i][++y]){
				++doubleLetterCounter;
				++y;
			}
		}
		doubleLetterCounter === 3 && wordsWithDoubleLetters.push(words[i]);
	}
	return wordsWithDoubleLetters;
}

console.log(findWordsWithDoubleLetters());