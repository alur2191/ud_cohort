const fs = require('fs');
const file = fs.readFileSync('../sowpods.txt');
const arr = file.toString().toUpperCase().split('\n');

// Write a function that takes a string substring as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).
// input: Words from textfile - type: Array with strings
// output: Array with string

function wordsContainingSubstring(words, string){
	const wordsWithSubstring = [];
	// loop through words
	words.reduce((prev,curr)=> curr.includes(string.toUpperCase() && wordsWithSubstring.push(curr)),wordsWithSubstring)
	// words.forEach(word=>{
		 // 	if word includes substring
	   //  push to wordWithSubstring
	// 	word.includes(string.toUpperCase()) && wordsWithSubstring.push(word)
	// })
	return wordsWithSubstring
}

console.log(wordsContainingSubstring(arr,'acca'));