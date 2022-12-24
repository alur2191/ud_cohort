// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.
// Loop through words
// Find words including "RSTLNE" 

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWords(){
	const wordsWithLettersUsed = [];
	
	words.filter(word => {
		let count = 0;
		for(let i = 0; i < word.length; i++){
			word[i] === "R" && count++;
			word[i] === "S" && count++;
			word[i] === "T" && count++;
			word[i] === "L" && count++;
			word[i] === "N" && count++;
			word[i] === "E" && count++;
			
		};
		word.includes("R") &&
		word.includes("S") &&
		word.includes("T") &&
		word.includes("L") &&
		word.includes("N") &&
		word.includes("E") &&
		word.length === count &&
		wordsWithLettersUsed.push(word);
	});
	return wordsWithLettersUsed;
};

console.log(findWords());