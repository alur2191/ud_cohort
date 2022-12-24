// What are all of the words that both start and end with a Y?
// Input: words -> array
// Output: words starting and ending with Y -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findStartingAndEndingWithY = (words) => {
	const startingAndEndingWithY = [];

	for(const word of words) {
		word.startsWith('Y')
		&& word.endsWith('Y')
		&& startingAndEndingWithY.push(word)
	};

	return startingAndEndingWithY;
};

console.log(findStartingAndEndingWithY(wordsFromFile))