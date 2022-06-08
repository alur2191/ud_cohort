// Write a method "isPalindrome" takes a string, return a bool

function isPalindrome(word){

	// split letters into an array
	// reverse the order of letter
	// combine letter back together
	return word.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));