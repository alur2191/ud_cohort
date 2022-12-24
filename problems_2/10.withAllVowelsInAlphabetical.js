// What are all of the words that have all 5 vowels, in alphabetical order?
// Input: words -> array
// Output: words with vowels in alphabetical order -> array

const fs = require('fs');
const wordsFromFile = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWithAllVowelsInAlphabetical = (words) => {
	const withAllVowelsInAlphabetical = [];
	// Loop through words
	for(const word of words) {
		let checkVowels = '';
		// Loop through characters of a word
		for(let i = 0; i < word.length; i++) {
			// if includes vowels, add occuring vowel to checkVowel variable
			if(word[i] === 'A' && checkVowels[checkVowels.length-1] != 'A'){
				checkVowels += 'A'
			}
			if(word[i] === 'E' && checkVowels[checkVowels.length-1] != 'E'){
				checkVowels += 'E'
			}
			if(word[i] === 'I' && checkVowels[checkVowels.length-1] != 'I'){
				checkVowels += 'I'
			}
			if(word[i] === 'O' && checkVowels[checkVowels.length-1] != 'O'){
				checkVowels += 'O'
			}
			if(word[i] === 'U' && checkVowels[checkVowels.length-1] != 'U'){
				checkVowels += 'U'
			}
		};
		// check if checkVowels variable for given word matches
		checkVowels === 'AEIOU' && withAllVowelsInAlphabetical.push(word)
	};

	return withAllVowelsInAlphabetical;
};

console.log(findWithAllVowelsInAlphabetical(wordsFromFile));