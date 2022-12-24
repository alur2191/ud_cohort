// [ ] What are all of the words containing UU?

// Input: words -> array
// Output: words containing UU -> array

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWordsContainingUU = (givenWords) => {
	const wordsContainingUU = [];

	for(const word of givenWords) {
		word.includes('UU') && wordsContainingUU.push(word);
	};

	return wordsContainingUU;
};

console.log(findWordsContainingUU(words));