
// [ ] Finding alphabet chains:
//     - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
//         - For example, “FEEDBACK” is an answer to this question
//     - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain and the words that can be made from that chain.

const fs = require('fs');
const parsedWords = fs.readFileSync('../sowpods.txt').toString().split('\n');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const findWordsWithGivenCharacters = (words, characters) => {
	const charactersToCheck = characters;
	const wordsWithGivenCharacters = [];

	// Check if each word includes given characters
	for (let i = 0; i < words.length; i++) {
		if(ifWordIncludesCharacter(words[i], charactersToCheck)){
			wordsWithGivenCharacters.push(words[i]);
		};
	};
	return wordsWithGivenCharacters;
};

const ifWordIncludesCharacter = (word, characters) => {
	for(let x = 0; x < characters.length; x++) {
		if(!word.includes(characters[x])) {
			return false;
		};
	};
	return true;
};

const findLongestAlphabetChain = () => {
	let longestChainCount = 6;
	let startingIndex = 0;
	let longestChain = [];
	let longestAlphabetChainWords = [];

	for(let y = 0; y < alphabet.length; y++) {
		const currentAlphabetChain = alphabet.slice(startingIndex, startingIndex+longestChainCount+1);

		const wordsWithCurrentAlphabetChain = findWordsWithGivenCharacters(parsedWords,currentAlphabetChain);

		// if there are words in current alphabet chain & current alphabet chain is longer than previous longest chain.
		if (wordsWithCurrentAlphabetChain.length > 0 && currentAlphabetChain.length > longestChainCount) {
			longestChainCount += 1;
			longestAlphabetChainWords = [...wordsWithCurrentAlphabetChain];
			longestChain = [...currentAlphabetChain];
			--y;
		} else if (currentAlphabetChain.length === longestChainCount) {
			// Break out of the loop as soon as current chain character count decrements and equals to longes
			break;
		} else {
			startingIndex += 1;
		};
	};
	console.log(longestChain);
	return longestAlphabetChainWords;
};


console.log(findLongestAlphabetChain());

// Create a function that accepts an array and returns a bool value indicating wether three numbers in the array add up to 0

// Discuss edge cases && discuss null being passed as argument
// Input: Array -> numbers
// Ouput: Bool

// const threeSum = (numbersArray) => {
// 	if(numbersArray.length === 0) {
// 		return false;
// 	};

// 	let calculationResult = 0;
// 	for(let i = 0; i < 3; i++) {
// 		calculationResult += numbersArray[i];
// 		// add current element to the next element
// 	};

// 	if(calculationResult === 0){
// 		return true;
// 	} else {
// 		return false;
// 	};
// };
// console.log([] === []);
// console.log(threeSum([-4,2,2]),"Expected: true");
// console.log(threeSum([]),"Expected: false");
// console.log(threeSum([-5,6,3]),"Expected: false");
// console.log(threeSum([-7,4,2,1,3]),"Expected: false");