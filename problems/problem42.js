// What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”

const fs = require('fs');
const sowpods = fs.readFileSync('../sowpods.txt').toString().split(/\r?\n/);

compoundWords = (words) => {
	const compoundWords = [];
	const wordsSet = new Set(words);
	for(let i = 0; i < words.length; i++){
		let checkWord = '';
		for(x = 0; x < words[i].length; x++){
			checkWord = checkWord + words[i][x];
			if(wordsSet.has(checkWord) && wordsSet.has(words[i].substring(x+1))){
				compoundWords.push(words[i]);
				break;
			}
		};
	};
	return compoundWords;
};

console.log(compoundWords(['butterfly', 'but', 'fly', 'butter']));

// compoundWord = (word) => {
// 	const compoundWords = [];
// 	let checkWord = '';
// 	for(x = 0; x < word.length; x++){
// 		checkWord = checkWord + word[x];
// 		if(wordsSet.has(checkWord) && wordsSet.has(word.substring(x+1))){
// 			compoundWords.push(word);
// 			break;
// 		};
// 	};

// 	return compoundWords
// }

// console.log(compoundWord('butterfly', ''))

// // Check if the word is made up *exactly* of other words
// // AKA there are no other letters.
// const findSubWords = (str, includeSelf = false) => {
//   const otherWords = includeSelf ? words : words.filter((w) => w !== str);
//   const subWord = otherWords.find((w) => str.indexOf(w) === 0);
//   if (!subWord) return [];
//   const remainingStr = str.replace(subWord, "");
//   return [subWord, ...findSubWords(remainingStr, true)];
// };

// const isCompound = (str) => {
//   const subWords = findSubWords(str);
//   return subWords.join("") === str;
// };

// const getCompoundWords = () => words.filter((w) => isCompound(w));

// console.log(getCompoundWords());


// const words = [
//   "snowman",
//   "snow",
//   "man",
//   "beachball",
//   "beach",
//   "ball",
//   "catman",
//   "beachman",
//   "umbrella",
//   "beachyball",
// ]; // replace with actual data

// // Check if the word is made up *exactly* of other words
// // AKA there are no other letters.
// const findSubWords = (str, includeSelf = false) => {
//   const otherWords = includeSelf ? words : words.filter((w) => w !== str);
//   const subWord = otherWords.find((w) => str.indexOf(w) === 0);
//   if (!subWord) return [];
//   const remainingStr = str.replace(subWord, "");
//   return [subWord, ...findSubWords(remainingStr, true)];
// };

// const isCompound = (str) => {
//   const subWords = findSubWords(str);
//   return subWords.join("") === str;
// };

// const getCompoundWords = () => words.filter((w) => isCompound(w));

// console.log(getCompoundWords());