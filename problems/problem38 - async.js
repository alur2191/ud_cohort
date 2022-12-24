// Problem: What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  
// Input: movies -> array of objects
// Output: Ratings distribution -> object
const csv = require('csvtojson');

const parse = require('./csvParser');

const findDistributionOfRatings= (movies) => {
	const distributionRatings = {};

	for(const movie of movies) {
		var existingCount = distributionRatings[movie.Rating];
		if (existingCount) {
			distributionRatings[movie.Rating] = existingCount + 1;
		} else {
		  distributionRatings[movie.Rating] = 1;
		}
		// var count = distributionRatings[movie.Rating] ?? 0;
		// distributionRatings[movie.Rating] = count + 1;
		distributionRatings[movie.Rating] 
		? ++distributionRatings[movie.Rating] 
		: distributionRatings[movie.Rating] = 1;
	}
	console.log(distributionRatings);

}

parse.csv('../top_movies.csv', findDistributionOfRatings)