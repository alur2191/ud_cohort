// What is the highest grossing moving from Universal Pictures, domestically?
const fs = require('fs');
const movies = fs.readFileSync('../top_movies.csv').toString().split(/\r?\n/);
movies.shift();

const findHighestGrossingDomestically = (distributor) => {
	let highestGrossingAmount = 0;
	
	const universalPicturesMovies = [];
	// Loop through movies
	movies.forEach(movie => {
		const movieArr = movie.split(',');
		[movieName,movieDistributor] = movieArr;
		// Find movies by Universal Pictures
		// Distributor == movieDistributor && universalPicturesMovies.push(movie);
		console.log(movieDistributor);
		if(distributor == movieDistributor) {
			universalPicturesMovies.push(movie);
		};
	});
	
	universalPicturesMovies.forEach(universalMovie => {
		[movieName,movieDistributor,year,domesticGross] = universalMovie.split(',');
		// Find highest grossing Universal Movie
		if (parseInt(domesticGross) > highestGrossingAmount) {
			highestGrossingAmount = domesticGross;
			// console.log(highestGrossingAmount);
		};
	});
	// console.log(universalPicturesMovies);
	return `Highest grossing amount for ${distributor}: $${highestGrossingAmount}`;
};

console.log(findHighestGrossingDomestically("Universal Pictures"));