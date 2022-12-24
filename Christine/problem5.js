const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const points = {}
function createObject(){
	for(let i = 1; i <= alphabet.length; i++){
		const index = i - 1;
		points[alphabet[index]] = i
	}
}

function countPoints(){
	// Loop through words
	createObject();
	const wordsWithHundredPoints = [];
	for(let y = 0; y < words.length; y++){
		// 	Loop through characters
		if(pointCounter(words[y]) === 100){
			wordsWithHundredPoints.push(words[y])
		}
	}

	return wordsWithHundredPoints;
};

console.log(countPoints());

function checkPoints(word){
	return `points: ${pointCounter(word)}. word: ${word}`
}

function pointCounter(word){
	let counterPoints = 0;
	for(let x = 0; x < word.length; x++){
		counterPoints += points[word[x]];
	}
	return counterPoints;
}

console.log(checkPoints('ALPINIST'));
