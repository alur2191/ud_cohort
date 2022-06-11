// What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWords(){
	let longestWordsWithLetters = [];
	const letters = "RSTLNE";
	for(let i = 0; i < words.length; i++) {
		let count = 0;
		for(let y = 0; y < words[i].length; y++){
			letters.includes(words[i][y]) && count++;
		};
		if(count != 0 && words[i].length === count){
			if(longestWordsWithLetters.length === 0){
				longestWordsWithLetters.push(words[i]);
			}else if(longestWordsWithLetters[0].length < words[i].length){
				longestWordsWithLetters = [words[i]];
			}else if(longestWordsWithLetters[0].length === words[i].length){
				longestWordsWithLetters.push(words[i]);
			}
		}
	};
	return longestWordsWithLetters
};

console.log(findWords());