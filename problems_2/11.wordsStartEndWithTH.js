// Problem: [ ] What are all of the words that both start with a “TH” and end with a “TH”?
// Input: Words from a text file

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findingTHwords(){
	const wordsStartingWithTH = [];
	words.forEach(word => word.startsWith('TH') && word.endsWith('TH') && wordsStartingWithTH.push(word));
	return wordsStartingWithTH;
}

console.log(findingTHwords());