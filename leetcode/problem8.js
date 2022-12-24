// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
// Input: Int -> year
// Ouput: String -> Winner
const csvParse = require('csvtojson');

const nba_finals_stats = csvParse().fromFile('../nba_finals.csv')
.then((stats)=>{
	return stats
});

const findWinnerByYear = async (year) => {
	// loop through stats
	const stats = await nba_finals_stats;

	for(let i = 0; i < stats.length; i++) {
		// if year matches statYear
		if(year === parseInt(stats[i].Year)) {
			return stats[i].Winner;
		};
	};
};

findWinnerByYear(1988);

