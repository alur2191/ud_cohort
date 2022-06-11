// Problem: What are all of the names that were top 40 baby names in both 1880 and 2020?
// if babyName1880 === babyName2020 = add to result
// Input: Lists of baby names from 1880 and 2020
// Output: List of top baby names from both 1880 and 2020

// Loop through 1880 names
// if 1880 name matches 2020 name, push the name to a new array
const fs = require('fs');
// Method, and passing parameter 
const file1880 = fs.readFileSync('../baby_names_1880_short.txt');
const file2020 = fs.readFileSync('../baby_names_2020_short.txt');
const names1880 = file1880.toString().toLowerCase().split('\n');
const names2020 = file2020.toString().toLowerCase().split('\n');

function solve(){
	const result = [];

	names1880.forEach(name1880 => {
		// names2020.forEach(name2020=>{
		// 	name1880 === name2020 && result.push(name1880);
		// })
		names2020.includes(name1880) && result.push(name1880);
	})
	return result;
}

console.log(solve());