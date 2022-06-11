// IF method = "S;" ? split word : combine words
// IF type = "M" {add empty parenthesis at the end of the string} ELSE IF type = "C" {}
// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem








// this function accepts an input, removes the first four characters, converts word into array. the function then loops through the array of characters and calls the combine and camel function on each element. this function looks removes spaces and capitalizes the at that index. the original function converts array into a string then returns that word.

function combinePath(input) {
	let word = input.substr(4);
	word = [...word];
	function combineAndCamel(index) {
			if (word[index] === ' ') {
					word.splice(index, 1);
					word.splice(index, 1, word[index].toUpperCase());
			}
			return word;
	}
	for (let i = 0; i < word.length; i++) {
			combineAndCamel(i);
	}
	return word.join('');
}

// this function accepts an input, removes any non-alphabet characters then converts string into array. the function then loops through array and calls the split at uppercase letter function on each element. This compares each letter to an uppercased version of itself to find the uppercased letters in the string. It will add a space at that index and return true. when the function returns true it adds 2 to the loop's counter to avoid infLoop. the original function converts array into a string, lowercases the entire word then returns that word.

function splitPath(input) {
	let word = input.substr(4).replace(/[^a-zA-Z]+/g, '');
	word = [...word];
	function splitAtUpperCaseLetter(i) {
			if (i !== 0 && word[i] === word[i].toUpperCase()) {
					word.splice(i, 0, ' ');
					return true;
			}
	}
	for (let i = 0; i < word.length; i++) {
			splitAtUpperCaseLetter(i) ? (i += 2) : null;
	}
	return word.join('').toLowerCase();
}

// Capitalizes first letter of a string

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function scannerV2(input) {

	if (input[0] === 'C' && input[2] === 'V') {
			return combinePath(input);
	} else if (input[0] === 'C' && input[2] === 'M') {
			return combinePath(input) + '()';
	} else if (input[0] === 'C' && input[2] === 'C') {
			return capitalizeFirstLetter(combinePath(input));
	} else {
			return splitPath(input);
	}
}
console.log(scannerV2(input));