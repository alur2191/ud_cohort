// input: array -> number, int -> k
// output: array -> arrays of sum to k

const findPairSum = (numbers, k) => {
	
	if(numbers.length === 0){
		return [];
	};
	
	const result = [];
	
	// outer loop through numbers
	for(let i = 0; i < numbers.length; i++) {
		// inner loop through numbers outerLoopIndex+1
		for(let y = i+1; y < numbers.length; y++) {
			// if the sum of inner loop index and outer loop index = k
			if(numbers[i] + numbers[y] === k) {
				// push inner and outer index elements into result array
				result.push([numbers[i],numbers[y]]);
			};
		};
	};
	return result;
};

console.log(findPairSum([1, 9, 6, 3, 5, 4], 10))