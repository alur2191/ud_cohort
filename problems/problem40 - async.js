// What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

const parser = require('./csvParser');

// Refactoring

const findNumberOneSongWithMostWeeks = (songs) => {
	const sortedSongs = sortSongsByArtist(songs);
	
	const topSongWeeksCounter = topSongCounter(sortedSongs);
	
	console.log(songWithMostWeeks(topSongWeeksCounter))
}


const sortSongsByArtist = (songList) => {
	return songList.sort((a,b) => {
		const upperA = a.artist.toUpperCase();
		const upperB = b.artist.toUpperCase();
		if (upperA > upperB) {
			return -1;
		}
		if (upperA < upperB) {
			return 1;
		}
		return 0;
	});
}

const topSongCounter = (sortedSongList) => {
	const songCounter = {};
	
	for(const song of sortedSongList){
		if(song.rank === '1'){
			songCounter[song.song+' - '+song.artist]
			? ++songCounter[song.song+' - '+song.artist]
			: songCounter[song.song+' - '+song.artist] = 1
		};
	};
	return songCounter;
}

const songWithMostWeeks = (countedSongList) => {
	let counter = 0;
	let numberOneSong = '';
	for (const [key, value] of Object.entries(countedSongList)) {
		if(counter < value){
			counter = value;
			numberOneSong = `${key} ${value}`
		}
	}
	return `${counter} ${numberOneSong}`
}

parser.csv('../billboard100_2000.csv',findNumberOneSongWithMostWeeks)

// const csv = require('csvtojson');

// (async () =>{
// 	const songs = await csv().fromFile('../billboard100_2000.csv');
// 	songs.sort((a,b) => {
// 		const upperA = a.artist.toUpperCase();
// 		const upperB = b.artist.toUpperCase();
// 		if (upperA > upperB) {
// 			return -1;
// 		}
// 		if (upperA < upperB) {
// 			return 1;
// 		}
// 		return 0;
// 	});
	
// 	const topSongWeeksCounter = {};

// 	for(const song of songs){
// 		if(song.rank === '1'){
// 			topSongWeeksCounter[song.song+' - '+song.artist]
// 			? ++topSongWeeksCounter[song.song+' - '+song.artist]
// 			: topSongWeeksCounter[song.song+' - '+song.artist] = 1
// 		};
// 	};
// 	let counter = 0;
// 	let numberOneSong = '';

// 	for (const [key, value] of Object.entries(topSongWeeksCounter)) {
// 		if(counter < value){
// 			counter = value;
// 			numberOneSong = `${key} ${value}`
// 		}
// 	}
// // console.log(numberOneSong);
// 	// let topSong = 0;
// 	// for(const song of topSongWeeksCounter){
// 	// 	if(song.count > 0){
// 	// 		topSong = song.rank;

// 	// 	}
// 	// }
// 	// console.log(topSongWeeksCounter);
// 	// create an object counting number of times a song was #1.
// 	// find the song with most weeks
// 	// return the artist and number of weeks song was #1
// })();


