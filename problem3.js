// input: string -> pattern, string -> input
// output: bool -> if pattern matches

const wordPattern = (pattern, input) => {
const matchingPatternChecker = {};
// convert both strings to arrays. Split pattern at '' and split input ' '
const patternArray = pattern.split('');
const inputArray = input.split(' ');
if(patternArray.length !== inputArray.length){
	return false
}

// loop through pattern array
for(let i = 0; i < inputArray.length; i++) {
	// if matchingPatternChecker[inputArray[i]] doesn't have a value
	console.log(matchingPatternChecker[patternArray[i]], inputArray[i]);
	if 
	(matchingPatternChecker[patternArray[i]] === undefined) {
		// set matchingPatternChecker[patternArray[i]] to inputArray[i]
		matchingPatternChecker[patternArray[i]] = inputArray[i];
	} else if(matchingPatternChecker[patternArray[i]] !== inputArray[i]) {
		return false
	};

};
return true
};

console.log(wordPattern('abcabc','red blue green red blue green'));