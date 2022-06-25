const fs = require('fs')
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().split('\n');
// What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
const wordsWithoutLetters = [];
const longestWordsWithoutLetters = () => words.forEach(word => !word.match(/[AEIOSHRTN]/i) && wordsWithoutLetters.push(word))

const findLongest = () => {
	longestWordsWithoutLetters();
	wordsWithoutLetters.reduce(function(longestWords, word){
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
	}, []);
};

console.log(longestWordsWithoutLetters);








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
