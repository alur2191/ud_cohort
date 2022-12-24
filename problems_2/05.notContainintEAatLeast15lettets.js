// What are all of the words that have no E or A and are at least 15 letters long?
// Input: words -> array
// Output: words without E or A and at least 15 letter -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWithoutEAatLeast15letters = (words) => {
	const withoutEAatLeast15letters = [];
	// loop through words
	for(const word of words) {
		// if word doesn't contain E, A and 15 letters long
		!word.includes('E')
		&& !word.includes('A')
		&& word.length >= 15
		&& withoutEAatLeast15letters.push(word); // push word to array
	};

	return withoutEAatLeast15letters;
};

console.log(findWithoutEAatLeast15letters(wordsFromFile));