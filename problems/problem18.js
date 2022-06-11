const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toLowerCase().split('\n');

// What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.

function findWords(letters){
	const result = [];
	for(let i = 0; i < words.length; i++){
		let counter = 0;
		letters.toLowerCase().split('').forEach(letter => words[i].includes(letter) && counter++);
		if(counter === 0){
			result.push(words[i])
		};
	};
	return result;
};

console.log(findWords('AEIOSHRTN'));