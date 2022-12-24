
// Constraints:                                                                                    
// - The input will always be a well-formed grid (all rows are the same length)                    
// - Ships can only be horizontal or vertical, not diagonal                                        
// - Ships will never touch each other

// Input: Array -> ocean
// Output: Int -> number of ships

const findNumberOfShips = (ocean) => {
	let shipCount = 0;
	// loop through outer array
	for(let i = 0; i < ocean.length; i++) {
		const row = ocean[i];
		// recursiveSolution();
		// loop through children arrays
		for(let j = 0; j < row.length; j++) {
			// if loop index has a ship
			if(row[j] === 'S') {
				// if there are no ships above or to the left
				if(j ? row[j-1] == '.' : true){
					if(i ? ocean[i-1][j] == '.' : true){
						shipCount += 1;
					}
				}
			}
		}
	}
	return shipCount;
};

let ships = [
	['.', '.', 'S', 'S'],
	['.', '.', '.', 'S'],
	['S', 'S', '.', 'S'],
	['.', '.', '.', 'S']
]

const recursiveSolution = (index) => {
	if(index === rowLength){
		return shipCount;
	} else {
		if(row[j] === 'S') {
			if(j ? row[j-1] == '.' : true){
				if(i ? ocean[i-1][j] == '.' : true){
					shipCount += 1;
					recursiveSolution();
				}
			}
		}
	}
};

console.log(findNumberOfShips(ships))