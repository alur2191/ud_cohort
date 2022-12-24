// What are all of the words that have a B and an X and are less than 5 letters long?
// Input: words -> array
// Output: word containing B, X and less than 5 letters -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findContainingBXlessThan5 = (words) => {
	const containingBXlessThan5 = [];
	for(const word of words) {
		word.includes('B')
		&& word.includes('X')
		&& word.length < 5
		&& containingBXlessThan5.push(word);
	};
	return containingBXlessThan5;
};

console.log(findContainingBXlessThan5(wordsFromFile));