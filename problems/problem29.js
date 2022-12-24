// Problem: ​​Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
// Input: Year -> Int, list of nba files as csv.
// Output: Winner that Year -> String

const fs = require('fs');
const file = fs.readFileSync('../nba_finals.csv');

function winnerForYear(soughtYear) {
    //  Parse the file
    const lines = file.toString().split(/\r?\n/);

    // Loop over the lines
    for (var line of lines) {
        // Year,Winner,Loser,Score,MVP
        [year, winner, ...rest] = line.split(',');
        if (parseInt(soughtYear) == parseInt(year)) {
            return winner;
        }
    }
    // Split out a line into winner and year.
    // Check if year matches.
    // Return matching winner.
}

// Can you write some test cases?
// What is the space and time complexity?
// What if you input file had 10M rows?


console.log(winnerForYear(1960));
console.log(winnerForYear('1960'));



// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r?\n/);
};

const finalsArr = fileReader('nba_finals.csv').map(el => {
	[year, winner, loser, score, mvp] = el.split(',');
	return { year, winner, loser, score, mvp };
});
console.log(finalsArr);

function thisYearsWinner(year) {
	// return finalsObj.filter(obj => {
	// 	if (+obj.year === year) return obj.winner;
	// })[0].winner;
	for (let final of finalsObj) {
		if (+final.year === year) {
			return final.winner;
		}
	}
}
