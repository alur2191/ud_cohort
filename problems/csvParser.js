const csvParse = require('csvtojson');

async function csv(filename, func){
	const songsFromFile = await csvParse().fromFile(filename);
	func(songsFromFile);
};

module.exports = { csv };