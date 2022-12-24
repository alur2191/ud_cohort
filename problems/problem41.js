/* Finding alphabet chains:
    - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
        - For example, “FEEDBACK” is an answer to this question
    - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.
*/

const fs = require('fs');
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};
const scrabbleWordsArray = fileReader('sowpods.txt');

/*
    word/letterArr passed as param
    feed each el in arr to next funtion as param

    input:string && letterArr we're comparing against
    out: boolean 


*/

// [
// 	'ACIDIFIABLE',
// 	'BACKFIELD',
// 	'BACKFIELDS',
// 	'BACKFILLED',
// 	'BACKFIRED',
// 	'BACKFITTED',
// 	'BACKFLIPPED',
// 	'BALDFACED',
// 	'BAREFACED',
// 	'BAREFACEDLY',
// 	'BAREFACEDNESS',
// 	'BAREFACEDNESSES',
// 	'BENEFACTED',
// 	'BENEFICIATED',
// 	'BIFOCALED',
// 	'BIFURCATED',
// 	'BIOFEEDBACK',
// 	'BIOFEEDBACKS',
// 	'BLACKFACED',
// 	'BOLDFACE',
// 	'BOLDFACED',
// 	'BOLDFACES',
// 	'CODIFIABILITIES',
// 	'CONFABBED',
// 	'CONFABULATED',
// 	'CONFOUNDABLE',
// 	'DECLASSIFIABLE',
// 	'DEFACEABLE',
// 	'DEFLECTABLE',
// 	'DEMOCRATIFIABLE',
// 	'DIEFFENBACHIA',
// 	'DIEFFENBACHIAS',
// 	'DISCOMFORTABLE',
// 	'DISCONFORMABLE',
// 	'FABRICATED',
// 	'FABRICKED',
// 	'FEEDBACK',
// 	'FEEDBACKS',
// 	'FIDDLEBACK',
// 	'FIDDLEBACKS',
// 	'FLASHBACKED',
// 	'FORBIDDANCE',
// 	'FORBIDDANCES',
// 	'NEUROFEEDBACK',
// 	'NEUROFEEDBACKS',
// 	'OBFUSCATED',
// 	'PREFABRICATED',
// 	'SUBCLASSIFIED',
// ];

function someFunction(str, arr) {
	for (const el of arr) {
		// console.log(!str.includes(el));
		if (!str.includes(el)) {
			return false;
		}
	}
	return true;
}


// A, B, C, 
let arr = ['E', 'F', 'G', 'H', 'I', 'J', 'K'];

const filteredList = scrabbleWordsArray.filter(word => {
	return someFunction(word, arr);
});
console.log(filteredList);

/*

loop through scrabble words
comparet to all letters array
sliding window
    how to tell if chain is brken?
        -broken means going through ALL WORDS in sowpods

        shifting window

 */
