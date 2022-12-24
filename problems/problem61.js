// Implement a recursive depth-first search that you fully understand and could reproduce in front of someone from scratch if you needed to.

// Then, run your DFS implementation on some example graphs. This means being comfortable with how to represent a graph with nodes and edges in your preferred interview language.

// This will become the foundation for the Boggle solver.

// https://www.puzzle-words.com/boggle-4x4/
// The rules are simple.
// You have to find as many words as possible on the grid.
// You can move from one letter (dice) to another if it is
// a neighbour (in all directions).
// You cannot use a letter (dice) more than once in a word.
// You get points for each word - the more letters the better.
// The puzzle is solved when you collect 30%, 60% or 90% of the total possible points depending on the difficulty.


// DO THIS TEST CASE FIRST.
// AB
// CD

//       n 
// B     C      D
// C  D  B  D   B  C
// D  C  D  B   C  B

// POSSIBLE HOMEWORK SHAPE?
function buildPossibleTrees(grid) {
	var trees = [];
	// for each possible starting letter
	// trees.add(buildTreeFor(letter, possibilityGrid));
	return trees;
}

function buildTreeFor(letter, possibiliyGrid) {
	// var node = Node(letter);
	// for possible children // reachable neighbors?
	// var child = buildTreeFor(childLetter, possibilyGridAfterChosingChild)
	node.children.addChild(child);
	return node;
}

// Homework: Start with a 2x2 grid, disallows repeating letters.
// e.g. "AA", "AA" is not a valid grid, but "AB", "CD".

// Things you might do?
// count the number of nodes in the tree and make sure
// there are 16.
// Count the number of leaf nodes, see there are 6?


// Example of using tree for dictionary

class Node {
	constructor(character){
			this.character = character;
			this.children = [];
	}
}

//       A
// B     C      D
// C  D  B  D   B  C
// D  C  D  B   C  B


// This function creates a Node for the graph.
// What things does this need to know?
// What are the arguments this needs?
// What steps are needed to build *just this* node.
function buildNode(grid) {
	console.log(grid.join(''))
	const charactersInArray = grid.toString()
	const parentNode = new Node(charactersInArray[0]);
	charactersInArray.shift()
	parentNode.children = [...charactersInArray];
	console.log(charactersInArray)
	if(parentNode.children.length === 1){
		return
	};

	for(let i = 0; i < parentNode.children.length; i++ ){
		if(i!==0){
			const firstElement = charactersInArray.shift();
			charactersInArray.push(firstElement);
			console.log(charactersInArray);
			buildNode(charactersInArray)
		}
	};
	// chararcter
	// some information about the grid?  what neighbors are available?
	// what letters have been used already?
};

buildNode(grid)

// A.children[0].children = []

var grid = ['AB', 'CD'];

const gridToTree = () => {
	const characters = grid.join('');
	const charStack = [];
	for(let i = 0; i < characters.length; i++) {
		const character = characters[i];
		
		const lastElement = charStack.length - 1;

		if (charStack[lastElement] !== characters[i]) {
			// charStack.push[];
			const children = [];
			const root = new Node(character, children)
			if(children.length !== 0){
				
			};
		};

	};
};




// class Node {
// 	constructor(value){
// 			this.value = value;
// 			this.children = [];
// 	}
// }

// const visitStack = [];

// class GridToGraph {

// 	constructor(){
// 		this.root = null;
// 	};

// 	insert(characters){
// 		const charToTree = (index) => {
// 			if(nodeCount !== characters.length * characters.length) {
// 				const value = characters[index];
// 				const newNode = new Node(value);

// 				if(this.root === null){
// 						this.root = newNode;
// 						nodeCount += 1;
// 						visitStack.push(value);
// 						return this;
// 				}
				
// 				let current = this.root;
// 				if(!visitStack.includes(characters[index+1])){
// 					current.children
// 				};
// 			};

// 			charToTree(index+1);
// 		};
		
// 	};
// };


// class GridToGraph {

// 	constructor(){
// 		this.root = null;
// 	};

// 	insert(characters){

// 		if(nodeCount !== characters.length * characters.length) {
// 			const value = characters[index];
// 			const newNode = new Node(value);

// 			if(this.root === null){
// 				this.root = newNode;
// 				nodeCount += 1;
// 				visitStack.push(value);
// 				return this;
// 			}

// 		const charToTree = (index) => {
			

// 				let current = this.root;

// 				checkVisitedValue(index+1);
// 			};
// 			charToTree(index+1);
// 		};
		
// 	};
// };

// // Returns list of possible words.
// function gridToPossibleWords(grid) {
// 	// Unimplemented.
// };

// const checkVisitedValue = (valueIndex) => {
// 	checkVisitedValue(valueIndex+1);
// };

// // loop (recursive?) through gridCharacters => character
// 	// create a new Node with a give character
// 	// if we don't have a root node
// 		// create a root node
// 		// increment node count
// 		// push character to character stack
// 	// else
// 		// ? recrusive function that accepts element (and parent node?)
// 			// ! push character to character stack
// 			// for each element in the gridCharacters that's not added to the character stack
// 				// push element to children array of the parent node
// 				// increment node count
// 		// ? call recursive function passing node children as elements





// 		// ? Should finish at the last leaft of the last child and go back




// 		// for each proceedingValue in the gridCharacters
// 			// push proccedingValue to children array of the parent node
// 			// increment node count
// 		// push value to character stack
// 		// loop (recursive?) through children



// console.log(gridToTree(grid));

// // Homework?
// function isWordInDictionary(word) {
// 	// Only valid if last letter is a leaf.
// }

// function isValidPrefix(prefix) {
// 	// Only valid if all letters in prefix are nodes.
// }
