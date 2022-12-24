// Write a function that takes a string availableLetters as an argument and returns an array of all of the words that can be made from only those letters. Letters can be re-used as many times as needed and can appear in any order. Not all of the letters in availableLetters have to be used.

// Input: Letters -> string
// Output: Words -> array
const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWordsMadeFromLetters = (availbleLetters) => {
	const wordsMadeFromLetters = [];
	for (let i = 0; i < words.length; i++) {
		const wordsSet = new Set(words[i].split(''));
		if (checkIfWordIncludesLetters(words[i], availbleLetters) && wordsSet.size === availbleLetters.length) {
			wordsMadeFromLetters.push(words[i]);
		};
	};
	
	return wordsMadeFromLetters;
};

const checkIfWordIncludesLetters = (word, letters) => {
	for (let i = 0; i < letters.length; i++) {
		if(!word.includes(letters[i])){
			return false
		};
	};
	return true;
};

console.log(findWordsMadeFromLetters(['F', 'E', 'R']));