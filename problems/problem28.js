// Problem: ​​Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
// Input: Year -> Int
// Output: Winner that Year -> String

const fs = require('fs');
const file = fs.readFileSync('../nba_finals.csv');
const winners = file.toString().split('\r\n'); // look up with trim does

// file.toString
// parsed = split by \n 
// loop through parsed
function findWinner(year){
	const list = [];
	for(let i = 0; i < winners.length; i++){
		const curWinner = winners[i].split(',');
		// add each team to an object and push each object into an list array
		const obj = {};
		obj['year'] = curWinner[0];
		obj['winner'] = curWinner[1];
		// obj['loser'] = curWinner[2];
		// obj['score'] = curWinner[3];
		// obj['mvp'] = curWinner[4];
		list.push(obj)
	}
	for(let x = 0; x < list.length; x++){
		if(list[x].year === year){

			return `${list[x].winner}`
		}
	}
	
	// return winner;
}

// loop through array, match arg year to year inside of each object
// return => if object year matches argument year


console.log(findWinner('1980'));


function parseFile(file) {
	const list = [];
	for(let i = 0; i < winners.length; i++){
		const curWinner = winners[i].split(',');
		// add each team to an object and push each object into an list array
		const obj = {};
		obj['year'] = curWinner[0];
		obj['winner'] = curWinner[1];
		obj['loser'] = curWinner[2];
		obj['score'] = curWinner[3];
		obj['mvp'] = curWinner[4];
		list.push(obj)
	}
	return list
}

// Use of sub-functions
// 