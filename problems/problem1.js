const fs = require('fs');
// Accessing different directory
const file = fs.readFileSync('../countries.txt');
// New Line
const countries = file.toString().split('\n');

// Problem: What are all of the countries that have “United” in the name?
// Input: List of countries
// Output: Countries that have "United"

// Introduce Lines

function solve(){
	// Initializing 
	const result = []; 
	for(let country of countries){
			// if country includes "United"
			if(country.includes("United")){
				// add to result
				result.push(country);
			}
		return result;
	}
}
console.log(solve());

	// // Loop through countries
	// for(let country of countries){
	// 	// if country includes "United"
	// 	if(country.includes("United")){
	// 		// add to result
	// 		result.push(country);
	// 	}
	// 	// if doesn't include "United", it won't be added to result array
	// }