// write a function that accepts two strings haystack and needle.
// return index of where needle occurs in haystack first.
// return -1 if needle doesn't exist in haystack.

// was the question given to me. Solve it w/o using indexOf(), includes() or any method that directly returns the value.

// Input: String -> haystack, String -> needle
// Output: Integer -> Index of the needle in haystack

const findNeedle = (haystack, needle) => {
	// var needleLength
	let needleLength = needle.length;
	// loop through the haystack
	console.log(needleLength);
	for(let i = 0; i < haystack.length; i++){
		// if substring starting at the index of the loop and ending the needleLength count === needle
		if(haystack.substring(i, needleLength + i) === needle){
			return i;
		}
	};
	return -1;
};

console.log(findNeedle('someexamplestring','examp'), "<< 4"); 