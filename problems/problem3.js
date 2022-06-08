const fs = require('fs');
const file = fs.readFileSync("../countries.txt");
const countries = file.toString().toLowerCase().split('\n');


function solution2(){
	const result = [];
	// looping through countries
	for(let country of countries){
		let count = 0;
		// looping through letters
		for(let letter of country){
			// if letter = vowel increment "count"
			if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
				count++;
			}
		}
		// divide country length by 2 and check if "count" is larger than the result
		country.length / 2 < count && result.push(country);
	}
	
	return result.length;
}


// Problem: What country names are > 50% vowels?
// Input: list of countries
// Output: Countries > 50% vowels

function soultion1(){
	const result = [];
	// looping through countries
	for(let country of countries){
		let count = 0;
		// looping through letters
		for(let letter of country){
			// if letter = vowel increment "count"
			if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
				count++;
			}
		}
		// divide country length by 2 and check if "count" is larger than the result
		country.length / 2 < count && result.push(country);
	}
	
	return result;
}

console.log(solution2());