const fs = require('fs');
const file = fs.readFileSync('../baby_names_2020_short.txt');
const names = file.toString().split('\n');

// Problem: What is the shortest baby name in the top 40 baby names 
// Input: List of names
// Output: Shortest name (Duplicates not included)

function solve(){
	// Use reduce to compare each word to the next one, and return shortest
	const shortestName = names.reduce((a, b) => a.length < b.length ? a : b);
	
	return shortestName;
}

console.log(solve());