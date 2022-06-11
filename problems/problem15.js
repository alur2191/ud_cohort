// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const words = file.toString().toUpperCase().split('\n');

function findWords(){
	let shortestStartingPROendingING = [];
	for(let i = 0; i < words.length; i++){
		// words[i].startsWith('PRO') &&
		// words[i].endsWith('ING') &&
		// shortestStartingPROendingING.length != 0 ? 
		// shortestStartingPROendingING[0].length > words[i].length ?
		// shortestStartingPROendingING = [words[i]]
		
		if(words[i].startsWith('PRO') && words[i].endsWith('ING')){
			if(shortestStartingPROendingING.length != 0){
				if(shortestStartingPROendingING[0].length === words[i].length){
					shortestStartingPROendingING.push(words[i])
				}else if(shortestStartingPROendingING[0].length > words[i].length){
					shortestStartingPROendingING = [words[i]]
				}
			} else {
				shortestStartingPROendingING.push(words[i])
			}
		}
	};
	return shortestStartingPROendingING
};

console.log(findWords());