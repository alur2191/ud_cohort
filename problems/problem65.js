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

// const subtreeBuilder = (position, usedPositions) => {
// 	const node = new Node(position);
// 	const unusedNeighbors = sortingUnusedNeighbors(testcase, usedPositions, position);
// 	const setUnusedPositions = [];
// 	console.log(unusedNeighbors)
// 	const children = [];
// 	for (const neighbor of unusedNeighbors) {
// 		const firstElements = setUnusedPositions.shift()
// 		children.push(subtreeBuilder(firstElements, setUnusedPositions));
// 	}

// 	node.children = children;
// }

// const sortingUnusedNeighbors = (letterGrid, usedLetters, letter) => {
// 	let unused = [];
// 	if(usedLetters.length !== 0) {
// 		for(let i = 0; i < letterGrid.length; i++){
// 			if(letterGrid[i] === letter){
// 				continue;
// 			} else if (!usedLetters.includes(letterGrid[i])){
// 				unused.push(letterGrid[i])
// 			}
// 		}
// 	} else {
// 		const arrayGrid = letterGrid.toString().split('')
// 		unused = [...arrayGrid.filter(char => char != letter)]
// 	}
// 	return unused
// }

const testcase = 'ABCD';


const subtreeBuilder = (position, usedPositions) => {
	const node = new Node(position);
	const unusedNeighbors = sortingUnusedNeighbors(testcase, usedPositions, position);
	for(let i = 0; i < testcase.length; i++) {
		const children = [...unusedNeighbors];
		node.children = children;
		for (const neighbor of unusedNeighbors) {
			children.shift();
			subtreeBuilder(neighbor,children);
		}
	}
	console.log(node)
}

const sortingUnusedNeighbors = (letterGrid, usedLetters, letter) => {
	let unused = [];
	if(usedLetters.length !== 0) {
		for(let i = 0; i < letterGrid.length; i++){
			if(letterGrid[i] === letter){
				continue;
			} else if (!usedLetters.includes(letterGrid[i])){
				unused.push(letterGrid[i])
			}
		}
	} else {
		const arrayGrid = letterGrid.split('')
		unused = [...arrayGrid.filter(char => char != letter)]
	}
	return unused
}

subtreeBuilder(testcase[0],[])


// subtreeBuilder(testcase[0][0],[])