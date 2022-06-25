// Write a function that takes a string word as an argument and returns a count of all of the “A”s in that string.

function findWordsWithA(word){
	let counter = 0;
	for(let y = 0; y < word.length; y++){
		word[y] === "A" && counter++;
	}
	return(`${counter} - ${word}`)
};

console.log(findWordsWithA("BENIN"));