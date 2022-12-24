const fs = require('fs')
const file = fs.readFileSync('../sowpods.txt')
const words = file.toString().toLowerCase().split('\n')

function solution3(){
	scores = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
	}
  
	const result = [];
	const obj = {}

	// loop through countries
	for(let word of words){

		let count = 0;
    let finalScore = 0;
		// If vowel included, increment count
		word.includes('s') && count++; 
		word.includes('p') && count++; 
		word.includes('c') && count++;
		word.includes('q') && count++;
		word.includes('e') && count++; 
		word.includes('i') && count++;
		word.includes('u') && count++;
		// if count = 1, add word to result
        
    // if (scores[letter]){
		// 	finalScore += scores[letter]
		// } 
		if(count === word.length){
			for(let i = 0; i < word.length; i++){
				if (scores[word[i]]){
					finalScore += scores[word[i]]
				}
			}
			
			result.push({word,score:finalScore})
		}
	}
	let final = [];
	result.sort((a,b)=>b.score-a.score)
	for(let i =0; i < result.length; i++){
		final.push(`${result[i].score} ${result[i].word}`)
	}
	console.log(final);
}

console.log(solution3());