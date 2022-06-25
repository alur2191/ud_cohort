function countUniqueValues(arr) {
	let first = 0;
	let second = 1;
	// let unique = 1;
	while (second !== arr.length) {
		if (arr[first] !== arr[second]) {
			// unique++;
			first++;
			arr[first] = arr[second];
			second++;
		} else {
			second++;
		}
	}
	return first + 1;
}



console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));