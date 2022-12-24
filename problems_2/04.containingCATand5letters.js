// [ ] What are all of the words that contain the word CAT and are exactly 5 letters long?
// Input: words -> array
// Output: containing CAT and are exactly 5 letters -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findContainingCATand5letters = (words) => {
	const containingCATand5letters = [];
	// Loop through words
	for(const word of words) {
		// if includes CAT && word length = 5
		word.includes('CAT') &&
		word.length === 5 &&
		containingCATand5letters.push(word); // push to array
	};

	return containingCATand5letters;
};

console.log(findContainingCATand5letters(wordsFromFile));