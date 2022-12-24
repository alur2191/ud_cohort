// What distributor has the most films on this list?


const csv = (dir) => {
	function fromFile(path){
		return fs.readFileSync(path).toString().split(/\r?\n/);
	}
	const movies = fromFile(dir)
	const destructuredMovies = [];
	const header = [];

	for(let x = 0; x < movies.length; x++){
		let start = 0;
		const singleMovie = {};
		let headerCount = 0;
		
		let quote = false;
		for(let i = 0; i < movies[x].length; i++){
			
			if(x===0 && movies[x][i] === ',') {
				singleMovie[movies[x].slice(start,i)] = null;
				header.push(movies[x].slice(start,i));
				start = ++i;

			}else if(x!==0) {
				if (movies[x][i] === '"') {
					quote = !quote;
				}

				if(!quote && movies[x][i] === ',') {
					singleMovie[header[headerCount]] = movies[x].slice(start,i);
					// console.log(movies[x].slice(start,i));
					start = ++i;
					++headerCount;
				};
			}
		}
		destructuredMovies.push(singleMovie);
	};

	return destructuredMovies;
};




// Loop through movies
// 	Count each distributors films
// 	Find distributor with the most films

const fs = require('fs');


const ericCsv = () => {
	function fromFile(dir) {

	}
};

// console.log(ericCsv instanceof Object);

// console.log(new Number(1) instanceof Number);
// console.log(new Number(1) == 1);
// console.log(new Number(1) === 1);
// console.log(new Number(1) == '1');


const alCsv = (dir) => {
	function fromFile(path){
		return fs.readFileSync(path).toString().split(/\r?\n/);
	}
	const movies = fromFile(dir)
	const destructuredMovies = [];
	const header = [];

	for(let x = 0; x < movies.length; x++){
		let start = 0;
		const singleMovie = {};
		let headerCount = 0;
		
		let quote = false;
		for(let i = 0; i < movies[x].length; i++){
			
			if(x===0 && movies[x][i] === ',') {
				singleMovie[movies[x].slice(start,i)] = null;
				header.push(movies[x].slice(start,i));
				start = ++i;

			}else if(x!==0) {
				if (movies[x][i] === '"') {
					quote = !quote;
				}

				if(!quote && movies[x][i] === ',') {
					singleMovie[header[headerCount]] = movies[x].slice(start,i);
					// console.log(movies[x].slice(start,i));
					start = ++i;
					++headerCount;
				};
			}
		}
		destructuredMovies.push(singleMovie);
	};

	return destructuredMovies;
};

// console.log(alCsv().fromFile('../top_movies.csv'));


// const moviesJsonObj = JSON.parse(moviesBuffer);

// var arr = Array.prototype.slice.call(moviesBuffer, 0)
// console.log(moviesBuffer)

// // .toString().split(/\r?\n/);
// console.log(typeof moviesJsonObj);



const findDistributorWithMostFilms = (movies) => {
	// let movieCount = 0
	// Loop through movies
	const distributorCount = {};
	movies.forEach(movie => {
		// console.log(movie);
		// Count each distributors films
		// console.log(movie);
		// movie.Distributor
		// ["Distributor of stuff"]
		distributorCount[movie['Distributor']] 
		? ++distributorCount[movie['Distributor']]
		: distributorCount[movie['Distributor']] = 1;
	});

	let distributorCounter = 0;
	let distributorWithMostMovies = '';
	// distributorCount.entries() // Map way of getting stuff.
	// new Number(1).entries()
	// {}.entries()
	// Object.entries(new Number(1))
	for(const [key, value] of Object.entries(distributorCount)){
		if(distributorCounter < value){
			distributorCounter = value;
			distributorWithMostMovies = `${key} - ${value}`;
		}
	}
	
	return distributorWithMostMovies
	// console.log(distributorFilmCount);
	// Find distributor with the most films
	// return distributorFilmCount
};

// console.log(findDistributorWithMostFilms());


// Homework: uncomment lines 116-118, and verify that both alDistribtor and csvDistributor are the same.
// Homework: fix alCsv to be a drop-in replacement for csv()
function test() {
	var fileName = '../top_movies.csv';
	// Al's implementation
	var alParsed = alCsv(fileName); // diff syntax
	var alDistributor = findDistributorWithMostFilms(alParsed);
	

	// var csvParsed = csv().fromFile(fileName); // make match
	// var csvDistributor = distributorWithMostFilms(csvParsed);
	// console.log(csvDistributor)
	return alDistributor
}

console.log(test());


console.log(Map)
console.log(Map.prototype)
console.log(Object)


// // const fs = require("fs");
// // const csv = require("csvtojson");

// (async () => {
//   // Load the topMovies
//   const topMovies = await csv().fromFile("top_movies.csv");

//   const {
//     getDistributorTitles,
//   } = require("./topMovies");

// })();