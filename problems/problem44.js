// [ ] What is the longest word that has no repeating letters?

// const fs = require('fs');
// const words = fs.readFileSync('../sowpods.txt').toString().split('\n');
// // console.log(words);

// function findWordsWithoutRepeatLetters(){

// 	const wordsWithoutRepeatingLetters = [];
// 	// Loop through words
// 	for(let i = 0; i < words.length; i++) {
// 		// 	Sort the word
// 		const sortedWord = words[i].split('').sort();
// 		let repeatingCheck = false;
// 		for(let x = 0; x < sortedWord.length; x++){
// 			// 			Check for duplicates
// 			if(sortedWord[x] == sortedWord[x+1]) {
// 				repeatingCheck = true;
// 			};
// 		};

// 		if(!repeatingCheck) {
// 			wordsWithoutRepeatingLetters.push(words[i]);
// 		};
// 	};

// 	let longestWordWithoutRepeatingLetters = '';

// 	for(let y = 0; y < wordsWithoutRepeatingLetters.length; y++) {
// 		if(longestWordWithoutRepeatingLetters.length < wordsWithoutRepeatingLetters[y].length){
// 			longestWordWithoutRepeatingLetters = wordsWithoutRepeatingLetters[y];
// 		};
// 	};

// 	return longestWordWithoutRepeatingLetters;
// };

// console.log(findWordsWithoutRepeatLetters());



// Refactoring

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');
// console.log(words);


const findLongestWordWithoutRepeatingLetters = (wordsArray) => {
	let longestWord = '';

	for(let y = 0; y < wordsArray.length; y++) {
		if(longestWord.length < wordsArray[y].length){
			longestWord = wordsArray[y];
		};
	};
	return longestWord;
}


function findWordsWithoutRepeatLetters(){

	const wordsWithoutRepeatingLetters = [];
	// Loop through words
	for(let i = 0; i < words.length; i++) {
		// 	Sort the word
		const sortedWord = words[i].split('').sort();
		let repeatingCheck = false;
		for(let x = 0; x < sortedWord.length; x++){
			// 			Check for duplicates
			if(sortedWord[x] == sortedWord[x+1]) {
				repeatingCheck = true;
			};
		};

		if(!repeatingCheck) {
			wordsWithoutRepeatingLetters.push(words[i]);
		};
	};

	return findLongestWordWithoutRepeatingLetters(wordsWithoutRepeatingLetters);
};


console.log(findWordsWithoutRepeatLetters());

