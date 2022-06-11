// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWords(){
	const wordsStartingPROendingING = []
	words.forEach(word=>{
		word.startsWith("PRO") &&
		word.endsWith("ING") &&
		word.length === 11 &&
		wordsStartingPROendingING.push(word)
	})
	return wordsStartingPROendingING
}

console.log(findWords());