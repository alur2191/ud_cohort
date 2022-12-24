// What movies on this list were distributed by DreamWorks?
const fs = require('fs');
const movies = fs.readFileSync('../top_movies.csv').toString().split(/\r?\n/);
movies.shift();

const findDistributedByDreamWorks = (distributer) => {
	const distributedByDreamWorks = [];
	movies.forEach(movie => {
		[movieName, movieDistributer, ...rest] = movie.split(',');
		if(movieDistributer === distributer){
			distributedByDreamWorks.push(movie);
		};
	});
	return distributedByDreamWorks;
};

console.log(findDistributedByDreamWorks('DreamWorks'));