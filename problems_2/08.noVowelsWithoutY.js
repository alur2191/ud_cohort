// What are all of the words with no vowel and not even a Y?
// Input: words -> array
// Output: words without vowels including Y -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWithoutVowelsIncludingY = (words) => {
	// loop through words
	const withoutVowelsIncludingY = [];

	for(const word of words) {
		// if doesn't include vowels
		!word.includes('A')
		&& !word.includes('E')
		&& !word.includes('I')
		&& !word.includes('O')
		&& !word.includes('U')
		&& !word.includes('Y')
		&& withoutVowelsIncludingY.push(word)
	};
	// add to array
	return  withoutVowelsIncludingY;
};

console.log(findWithoutVowelsIncludingY(wordsFromFile));