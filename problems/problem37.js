// Problem: [ ] What is the earliest year on this list, and what were the films from that year?

// Loop through the movies
// 	Find the earliest year
// 	Find movies released in that earliest year

const csv = require('csvtojson');

(async()=>{
	const movies = await csv().fromFile('../top_movies.csv');
	
	let earliestYear = 0;
	
	let earliestReleasedMovies = [];
	console.log(movies);
	for(const movie of movies){
		if(!earliestYear){
			earliestYear = movie['Release Date'];
		}
		if(earliestYear > movie['Release Date']){
			earliestYear = movie['Release Date']
		}
	}
	for(const movie of movies){
		if(movie['Release Date'] === earliestYear){
			earliestReleasedMovies.push(movie)
		}
	}
	console.log(earliestReleasedMovies);
})();

