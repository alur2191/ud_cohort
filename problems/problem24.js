// Write a function that takes a string word as the first argument, a string letter as the second argument, and returns a count of how many times letter occurs in word.

function findWordsWithA(word, letter){
	let counter = 0;
	for(let y = 0; y < word.length; y++){
		
		word[y] === letter && counter++;
	}
	return(`${counter} - ${word}`)
};

console.log(findWordsWithA("BENIN","I"));