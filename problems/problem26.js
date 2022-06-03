// Write a method "isAnogram" takes a string, return a bool

function isAnagram(word){
	// split letters into an array
	// reverse the order of letter
	// combine letter back together
	return word.split('').reverse().join('');
}

console.log(isAnagram("racecar"));