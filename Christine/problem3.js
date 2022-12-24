const howManyTimes = (string, char) => {
	// Loop over a string
	// if string[i] === char = count++
	// return count
	let count = 0;
	for(let i = 0; i < string.length; i++){
		string[i] === char && count++;
	};

	return count
}

console.log(howManyTimes("abracadabra", "a"));