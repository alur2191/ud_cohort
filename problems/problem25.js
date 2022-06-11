// Write a function that takes a string `phrase` and returns a dictionary contains counts of how many times every character appears in `phrase`.


function findWordsWithA(phrase){
	let counter = 0;
	for(let y = 0; y < phrase.length; y++){
		
		phrase[y] === letter && counter++;
	}
	return(`${counter} - ${phrase}`)
};

console.log(findWordsWithA("ABANDONMENTS"));