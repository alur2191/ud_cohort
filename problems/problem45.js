// What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example, “REFERRER” is an answer to this question, because it uses only 3 different letters: R, E, and F.

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

function findWords(){
	// Loop through words
	const result = [];
	for(let i = 0; i < words.length; i++){
		const characters = [];
		// If word.length >= 8 
		if(words[i].length >= 8){
			// Looping through each characters of a given word
			for(let y = 0; y < words[i].length; y++){
			// 		Check if characters array has less than 4 elements
				if(!characters.includes(words[i][y])){;
					//		Check if characters isn't in the characters array
						characters.push(words[i][y]);
				}
			}
			characters.length < 4 && result.push(words[i]);
		}
	}
	return result
}

console.log(findWords());