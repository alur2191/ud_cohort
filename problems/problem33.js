// [ ] Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
// - 6 times: Michael Jordan
// - 3 times: Shaquille O'Neal, LeBron James
// - 2 times: <etc>

// Input: List of finals -> array
// Output: List of MVP by times WON -> Array of strings

const fs = require('fs');
const finals = fs.readFileSync('../nba_finals.csv').toString().split(/\r?\n/);
// console.log(finals);
finals.shift()

const mvpCount = {};
const sortedMvp = [];

const countMvps = () => {
	// loop through finals
	for(let i = 0; i < finals.length; i++){
		// 	convert string element to an array and destructure
		[year, teamA, teamB, score, mvp] = finals[i].split(',');
		if(mvp){
			mvpCount[mvp] ? ++mvpCount[mvp] : mvpCount[mvp] = 1;
		};
	};
	
	for(const player in mvpCount){
		sortedMvp.push(`${mvpCount[player]} times: ${player}`);
	};

	return sortedMvp.sort((a,b)=> b.charAt(0) - a.charAt(0));
};

console.log(countMvps());

