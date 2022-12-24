// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?


const parser = require('./csvParser')

const findSongsWithMostWeeks = (songList) => {
	const songCounter = {};
	// loop through songs
	for(let i = 0; i < songList.length; i++){
		// count each song
		songCounter[songList[i].song] ?
		++songCounter[songList[i].song] :
		songCounter[songList[i].song] = 1;
	}

	let songMostWeeks = 0;
	let songName = '';
	for(const song in songCounter){
		if(songMostWeeks < songCounter[song]){
			songMostWeeks = songCounter[song];
			songName = song
		};
	}
	console.log(`${songName} with ${songMostWeeks} weeks`);
}

parser.csv('../billboard100_2000.csv',findSongsWithMostWeeks)

// console.log("before");
// (async () => {
// 	// parse songs csv to json
//     console.log("bar");
// 	await bar1();
//     console.log("bar2");
// 	bar2()
// })()
// console.log("after");

// async function foo() {
//     await new Promise(resolve => setTimeout(resolve, 100));
//     console.log('foo')
//     return 1;    
// }


// async function bar1() {
//     console.log('bar1 1')
//     // do thing
//     await foo();
//     // do other thing.
//     console.log('bar1 3');
// }
// // console.log 1, foo, 2.

// function bar2() {
// 	console.log('bar2 1')
// 	foo().then(() => {
// 			// do other thing.
// 			console.log('bar2 2')
// 	});
// 	console.log('bar2 3')
// }
// print 1, 3, foo, 2.

// async magically transforms bar into bar2.



// async function songOnChartLongest(filename /* string */) /* : string */ {
// 		const songs = await csv().fromFile(filename);
// 		const songCounter = {};
// 		// loop through songs
// 		for(let i = 0; i < songs.length; i++){
// 			// count each song
// 			songCounter[songs[i].song] ?
// 			++songCounter[songs[i].song] :
// 			songCounter[songs[i].song] = 1;
// 		}
// 		let songMostWeeks = 0;
// 		let songName = '';
// 		for(const song in songCounter){
// 			if(songMostWeeks < songCounter[song]){
// 				songMostWeeks = songCounter[song];
// 				songName = song
// 			};
// 		}
// 		// find counter with the biggest value
// 		// console.log(`${songName} with ${songMostWeeks} weeks`);
// }

// var myPromise = asynFunc();
// myPromise.then(() => {});
// myPromise.catch(() => {});

// asyncFunc().then(()=>{}).catch(()=> {});


// console.log(songOnChartLongest('../billboard100_2000.csv').then((song)=>console.log(song)));


// (async () => {
// 	// parse songs csv to json
// 	const songs = await csv().fromFile('../billboard100_2000.csv');
// 	const songCounter = {};
// 	// loop through songs
// 	for(let i = 0; i < songs.length; i++){
// 		// count each song
// 		songCounter[songs[i].song] ?
// 		++songCounter[songs[i].song] :
// 		songCounter[songs[i].song] = 1;
// 	}

// 	let songMostWeeks = 0;
// 	let songName = '';
// 	for(const song in songCounter){
// 		if(songMostWeeks < songCounter[song]){
// 			songMostWeeks = songCounter[song];
// 			songName = song
// 		};
// 	}
// 	// find counter with the biggest value
// 	console.log(`${songName} with ${songMostWeeks} weeks`);
// })()



// async function csvParse(filename, func){
// 	const songsFromFile = await csv().fromFile(filename);
// 	func(songsFromFile);
// };

// csvParse('../billboard100_2000.csv',testFunction);

// exports.csvParse = csvParse;