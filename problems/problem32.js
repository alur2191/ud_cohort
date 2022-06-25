// Which teams have made it to the NBA finals but have never won?blue
// Input: Team -> String
// Output: Teams -> Array of strings
const fs = require('fs');
const file = fs.readFileSync('../nba_finals.csv').toString().split(/\r?\n/);

file.shift();

const teamWins = {};
const noWins = [];

function determineTheWinner(score){
	// Determine the winner
	return score.charAt(0) > score.charAt(2) ? 1 : 0;
}

function incrementTeamWin(score, a, b){
	// Increment the count for each team that won
	if(determineTheWinner(score)){
		teamWins[a] = teamWins[a] ? teamWins[a] + 1 : 1;
		teamWins[b] = teamWins[b] ? teamWins[a] + 0 : 0;
	}else{
		teamWins[a] = teamWins[a] ? teamWins[a] + 0 : 0;
		teamWins[b] = teamWins[b] ? teamWins[b] + 1 : 1;
	}
}

function teamsWithNoWins(){
	file.forEach(final=>{
		[year, teamA, teamB, score] = final.split(',');
		incrementTeamWin(score, teamA, teamB);
	})
	// Return all team with no wins
	for(const team in teamWins){
		teamWins[team] === 0 && noWins.push(team)
	}
	return noWins
}


console.log(teamsWithNoWins());