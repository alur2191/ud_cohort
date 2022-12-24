class Node {
	constructor(parent){
			this.parent = parent;
			this.children = [];
	}
}

//       A
// B     C      D
// C  D  B  D   B  C
// D  C  D  B   C  B

const testcase = ['AB',
									'CD'];

const subtreeBuilder = (position, usedPositions) => {
	const node = new Node(position);
	// console.log(usedPositions);
	// if(usedPositions.length){
		
		const unusedNeighbors = sortingUnusedNeighbors(usedPositions, position);
		node.children = unusedNeighbors;
		console.log(node);
		subtreeBuilder(unusedNeighbors.shift(), unusedNeighbors.length !== 0 ? unusedNeighbors : joinedTestcase.split(''));
	// }
	// console.log(node);
}



// const subtreeBuilder = (position, usedPositions) => {
// 	const node = new Node(position);
// 	const unusedNeighbors = sortingUnusedNeighbors(testcase, usedPositions, position);
// 	for(let i = 0; i < testcase.length; i++) {
// 		const children = [...unusedNeighbors];
// 		node.children = children;
// 		for (const neighbor of unusedNeighbors) {
// 			children.shift();
// 			subtreeBuilder(neighbor,children);
// 		}
// 	}
// 	console.log(node)
// }

const sortingUnusedNeighbors = (usedLetters, letter) => {
	let unused = [];
	if (usedLetters.length !== 0) {
		for(let i = 0; i < usedLetters.length; i++){
			if(usedLetters[i] !== letter){
				unused.push(usedLetters[i])
			}
		}
		
		return unused
	} else {
		const arrayGrid = joinedTestcase.split('')
		unused = [...arrayGrid.filter(char => char != letter && !usedLetters.includes(char))]
	}
	return unused
}

const joinedTestcase = testcase.join('');

subtreeBuilder(joinedTestcase[0],[])
