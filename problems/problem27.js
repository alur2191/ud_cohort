// Takes a string, return a string with every other letter capt
// Input: javascript
// Output: JaVaScRiPt

function capitalizeWord(word){
	let capitalizedWord = '';
	let capitalize = true;
	for(let i = 0; i < word.length; i++){
		capitalize ? capitalizedWord += word[i].toUpperCase() : capitalizedWord += word[i];
		capitalize = !capitalize;
	}

	return capitalizedWord
}

console.log(capitalizeWord("javascript"));