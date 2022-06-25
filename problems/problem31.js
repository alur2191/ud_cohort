// Write solutions with at least 3 functions
// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

// Input: Team name -> String
// Output: All years team has won the finals -> Array of int

const fs = require('fs');
const finals = fs.readFileSync('../nba_finals.csv').toString().split(/\r?\n/);

function determineWinner(score){
	// if teamA won return true, if teamB won return false
	return score.charAt(0) > score.charAt(2) ? 1 : 0;
}

function yearsTheTeamHasWonFinals(team){
	const yearsWon = [];
	finals.forEach(final=>{
		[year, teamA, teamB, score] = final.split(',');
		
		if(determineWinner(score)){
			teamA === team && yearsWon.push(year);
		}else{
			teamB === team && yearsWon.push(year);
		}
	})
	return yearsWon
}

console.log(yearsTheTeamHasWonFinals("Los Angeles Lakers"))
// console.log(yearsTheTeamHasWonFinals("Los Angeles Lakers"));

