const fs = require('fs')
const file = fs.readFileSync('../countries.txt')
const countries = file.toString().toLowerCase().split('\n')

// Problem: Given a list of countries, find all countries which have only one vowel (duplicates allowed).
// Inputs: List of countries.
// Outputs: List of countries, matching vowel filter.
// Pseudocode
// TRY TO SOLVE WITH STRINGS


// Attempt #4
// function solution4(){
// 	const result = [];
// 	const vowels = 'aeiou'
// 	for(let country of countries){
// 		let count = 0;
// 		for(let i = 0; i < country.length; i++){
// 			for(let vowel of vowels){
// 				if(vowel === country[i]){
// 					if(count < 2){
// 						count++
// 					}else{
// 						return null
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return result.length
// }

// // Attempt #3
function solution3(){
	const result = [];
	// loop through countries
	for(let country of countries){
		let vowels = 0
		// If vowel included, increment vowels
		country.includes('a') && vowels++
		country.includes('e') && vowels++ 
		country.includes('i') && vowels++
		country.includes('o') && vowels++
		country.includes('u') && vowels++
		// if vowels = 1, add country to result
		vowels === 1 && result.push(country)
	}

	return result.length
}

console.log(solution3());


// Attempt #2

// function solution2(){
// 	const result = [];
// 	// looping through countries
// 	const vowels = {
// 		a: null,
// 		e: null,
// 		i: null,
// 		o: null,
// 		u: null
// 	}

// 	for(let country of countries){
// 		// looping through letters
// 		for(let letter of country){
// 			// if letter = vowel increment "count"
// 			const count = 0;

// 			letter === 'a' ? vowels.a += 1 : null
// 			letter === 'e' ? vowels.e += 1 : null
// 			letter === 'i' ? vowels.i += 1 : null
// 			letter === 'o' ? vowels.o += 1 : null
// 			letter === 'u' ? vowels.u += 1 : null
// 			console.log(vowels[letter]);
// 			vowels[letter] === null ? count++ : null

// 			if(vowels[letter] == null){
// 				const checkArray = [];
// 				checkArray.push(country)
// 				if(checkArray.length === 4){
// 					result.push(country)
// 				}
// 			}
// 		}



		// let counter = null
		// const vowelsUsed = Object.values(vowels).forEach(vowel=> vowel === null ? counter++ : null )
		
		// console.log(counter, ' ',);
		// // counter === 1 && result.push(country)
		// counter === 4 ? result.push(country) : null
		
// 	}
	
// 	return result;
// }


// Attempt 2
function solution2(countries) {
	let result = []
  // Loop through countries
	for(let country of countries){
		let lastSeenVowel = null;
		// Loop through letters.
		for(let i = 0; i < country.length; i++){
			// If letter is a vowel
			if(country[i]=='a'||country[i]=='e'||country[i]=='i'||country[i]=='o'||country[i]=='u'){
				// Reducing cycle time
				// Don't look through vowel if lock, if vowel is found
				// if lastSeenVowel != letter and lastSeenVowel != null

				if(lastSeenVowel != country[i] && lastSeenVowel != null){
					break
				}
			}
		}
	}
}
// Loop through all countries
// for each country
// count all vowel
// If two vowels are non-zero, country is invalid, otherwise valid.
// Add valid countries to results.
// Use a function


// PROBLEM: What countries use only one vowel in their name (the vowel can be used multiple times)
// INPUT: countries, 
// OUTPUT: Countries with one vowel in their name (the vowel can be used multiple times)

// Looping over countries
// Create a "current" variable where we will store a single vowel
// Create a "valid" variable which will make sure that we are still looping through country
// Loop over each letter and comparing each letter of the country to the vowels
// if a letter matches a vowel
// check if "current" variable is equal to the letter
// if it's equal, do nothing
// else check if "current" is null
// if it's null, assign the letter to "current" variable
// else assign true to "valid" variable



// Attempt #1
function solution1(){
	let result = []
	for(let country of countries){
		let current = null;
		let valid = false
		for(let i = 0; i < country.length; i++){
			valid = false
			if(valid){
				// Not sure if "switch-case" is a good approach when it comes to performance
				switch(country[i]){
					case 'a':
						current === 'a' ? null : current === null ? current = 'a' : invalid = true
					case 'e':
						current === 'e' ? null : current === null ? current = 'e' : invalid = true
					case 'i':
						current === 'i' ? null : current === null ? current = 'i' : invalid = true
					case 'o':
						current === 'o' ? null : current === null ? current = 'o' : invalid = true
					case 'u':
						current === 'u' ? null : current === null ? current = 'u' : invalid = true
					default:
						return null
				}
			}else{
				return
			}
		}
	}
	return result
}
