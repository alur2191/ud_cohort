const fs = require('fs');
const file = fs.readFileSync('../baby_names_2020_short.txt');
const names = file.toString().split('\n');

// Problem: What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.
// Input: List of names
// Output: Longest names (duplicates included)
// Loop through names

function longestNames(){
	const result = [];
	names.sort((a,b) => b.length - a.length);
	names.forEach(name=>{
		name.length === names[0].length && result.push(name);
	})
	return result;
}

console.log(longestNames());
