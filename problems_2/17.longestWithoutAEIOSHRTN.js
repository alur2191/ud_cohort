const fs = require('fs')
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().split('\n');
// What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
const wordsWithoutLetters = [];
const longestWordsWithoutLetters = () => words.forEach(word => !word.match(/[AEIOSHRTN]/i) && wordsWithoutLetters.push(word))

const findLongest = () => {
	longestWordsWithoutLetters()
	return wordsWithoutLetters.reduce((longestWords, word) => {
		console.log(longestWords)
		if(longestWords.length != 0) {
			if(word.length > longestWords[0].length){
				// updating the value of longestWords, assigning it to a new array including word in it
				longestWords = [word];
			}else if(word.length === longestWords[0].length){
				longestWords.push(word);
			}
		} else if (longestWords.length == 0) {
			longestWords = [word];
		};

		return longestWords;
	}, []);
};

console.log(findLongest());

// let result = [];
// const findLongest = () => {
// 	longestWordsWithoutLetters();
// 	for(let i = 0; i < wordsWithoutLetters.length; i++){
// 		if(result.length != 0) {
// 			if(wordsWithoutLetters[i].length > result[0].length){
// 				// updating the value of wordsWithoutLetters, assigning it to a new array including word in it
// 				result = [wordsWithoutLetters[i]];
// 			}else if(wordsWithoutLetters[i].length === result[0].length){
// 				result.push(wordsWithoutLetters[i]);
// 			}
// 		} else if (result.length == 0) {
// 			result = [wordsWithoutLetters[i]];
// 		};
// 	}
// 	return result;
// }

// console.log(findLongest());

// function findWords(letters){
// 	const result = [];
// 	for(let i = 0; i < words.length; i++){
// 		let counter = 0;
// 		letters.split('').forEach(letter => words[i].includes(letter) && counter++);
// 		if(counter === 0){
// 			result.push(words[i])
// 		};
// 	};
// 	return result;
// };

// console.log(findWords('AEIOSHRTN'));