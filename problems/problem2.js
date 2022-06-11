const fs = require('fs');
const file = fs.readFileSync('../countries.txt');
const countries = file.toString().toLowerCase().split('\n')

// Problem: What countries both begin and end with a vowel?
// Input: List of countries
// Output: Countries beginning and ending with a vowel

function solve(){
	const result = [];
	// Looping through countries
	for(let country of countries){
		// If letters start with vowels
		if(country.startsWith('a')||country.startsWith('e')||country.startsWith('i')||country.startsWith('o')||country.startsWith('u')){
			// If letters end with vowels
			if(country.endsWith('a')||country.endsWith('e')||country.endsWith('i')||country.endsWith('o')||country.endsWith('u')){
				result.push(country);
			}
		}
	}

	return result;
}

console.log(solve());