// [ ] What are all of the words containing a Q but not a U?
// Input: words -> array
// Output: words containing Q but not U -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWordsContainingQnotU = (words) => {
	const containingQnotU = [];
	
	for(const word of words) {
		word.includes('Q') &&
		!word.includes('U') &&
		containingQnotU.push(word);
	};

	return containingQnotU;
};

console.log(findWordsContainingQnotU(wordsFromFile));