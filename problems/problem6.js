const fs = require('fs');
const file = fs.readFileSync('../countries.txt');
const countries = file.toString().split('\n');

// Problem: What is the shortest country name? Make sure your solution can handle ties.
// Input: list of countries
// Output: At least one country name that contains another country name

function solve(){
	let result = [];
	// (primary) looping through countries to compare against other countries
	countries.forEach(country => {
		// (secondary) looping through countries to compare against country from prev loop
		for(let i = 0; countries.length > i; i++){
			// if (secondary) country doesn't includes South and Republic
			// && if not duplicate
			// && if (primary) includes (secondary) country
			if(!countries[i].includes("South") &&
				!countries[i].includes("Republic") &&
				countries[i] != country &&
				countries[i].includes(country)){
				// Elements
				result.push(countries[i]);
			}
		}
	})

	return result
}



console.log(solve());