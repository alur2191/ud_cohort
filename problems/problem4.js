const fs = require('fs');
const file = fs.readFileSync('../countries.txt');
const countries = file.toString().split('\n');

// Problem: What is the shortest country name? Make sure your solution can handle ties.
// Input: 
// Output: 

function solve(){
	let result = [];
	let shortest = null;
	// looping through countries
	for(let country of countries){
		// if country length equals to "shortest", add the country to result array
		if(country.length === shortest){
			result.push(country);
		// else if country length is shorter than "shortest" and "shortest" is null
		// recreate the result array and with the country inside
		}else	if(country.length < shortest || shortest === null){
			shortest = country.length;
			result = [country];
		} 
	}

	return result
}



console.log(solve());