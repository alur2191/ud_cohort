// What are all of the words that have all 5 vowels, in any order?
// Input: words -> array
// Output: words with all 5 vowels -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWithAllVowels = (words) => {
	const withAllVowels = [];
	// loop through words
	for(const word of words) {
		// if cointains all 5 vowels
		word.includes('A')
		&& word.includes('E')
		&& word.includes('I')
		&& word.includes('O')
		&& word.includes('U')
		&& withAllVowels.push(word); // push to withAllVowels array
	};
	return withAllVowels;
};

console.log(findWithAllVowels(wordsFromFile));