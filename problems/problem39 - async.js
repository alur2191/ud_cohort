// [ ] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
// These were the number one songs of 2000:
// "Try Again" - Aaliyah
// "Say My Name" - Destiny's Child
// "What A Girl Wants" - Christina Aguilera
// "Maria Maria" - Santana Featuring The Product G&B
// "Smooth" - Santana Featuring Rob Thomas
// "Independent Women Part I" - Destiny's Child

const parse = require('./csvParser');

const findNumberOneSongs= (songs) => {
	const numberOneSongs = [];
	for(const song of songs){
		if(song.rank === '1' && !numberOneSongs.includes(`"${song.song}" - ${song.artist}`)){
			numberOneSongs.push(`"${song.song}" - ${song.artist}`)
		}
	}
	console.log(numberOneSongs);
}

parse.csv('../billboard100_2000.csv', findNumberOneSongs)