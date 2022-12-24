// input: array -> numbers, int -> k
// output: array -> three largest values in the array

const threeLargestValues = (numbers, k) => {
	if(numbers.length === 0){
		return [];
	};
	// sort the array from largest to smallest
	// return first three values from sorted array
	let sortedArray = numbers.sort((a,b)=> b-a);
	return sortedArray.splice(0,k)
};

console.log(threeLargestValues([5, 16, 7, 9, -1, 4, 3, 11, 2],3));