// What are all of the words containing an X and a Y and a Z?

// Input: words -> array
// Ouput: words containing X and a Y and a Z
const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findContainingXYZ = (givenWords) => {
	const containingXYZ = [];

	for(const word of givenWords){
		word.includes('X')
		&& word.includes('Y')
		&& word.includes('Z')
		&& containingXYZ.push(word)
	};

	return containingXYZ;
};

console.log(findContainingXYZ(words));