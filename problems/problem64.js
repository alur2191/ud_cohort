class Node {
	constructor(parent){
			this.parent = parent;
			this.children = [];
	}
}

function one(array) {
	// Creates a new array.
	return array + [1];
}

function two(array) {
	// modifies the array.
	array.push(1);
	return array;
}

var foo = [2];
console.log(one(foo));
// [2, 1]
console.log(one(foo));
// [2, 1]
console.log(two(foo));
// [2, 1]
console.log(two(foo));
// [2, 1, 1]

function three(foo) {
	foo = 1;
}

function four(foo) {
	foo.push(1)
}

var bar = 3
var baz = [];
three(bar);
console.log(bar);
// 3
four(baz);
console.log(baz);
// [1]



function five(foo) {
	foo += "3"; // foo.append('3');
	foo = "bar";
}

var potato = "tomato";
five(potato);
// tomato3



// AB
// CD

function computedUnusedNeighbors(...) {
	// what is the "position" x, y in our grid.
	var possible = [
		grid[x - 1][y - 1],
		grid[x + 1][y - 1],
		grid[x - 1][y - 1],
		grid[x - 1][y - 1],
	];
	// Filter out used.#1
	return

}

function buildSubtree(position, usedPositons) {
	// build a node for ourself.
	var node = Node(letter);
	// some combination of grid adjacency and not being used yet.
	var unusedNeighbors = computedUnusedNeighbors(grid, usedLetters, letter);
	var children = [];
	// call buildSubtree for all possible children.
	for (var neighbor in unusedNeighbors) {
		// FIX buildSubtree args?
		children.append(buildSubtree(neighbor, usedLetters + letter));
	}
	node.children = children;
	return node;
}

//       P
// R     A      
// O  Y  D  R 
// D        K 

//       A
// B     C      D
// C  D  B  D   B  C
// D  C  D  B   C  B

buildSubtree("A", ...) {
	return Node("A", children: allowedNeighbors.map(buildSubTree), usedLetters + "A");
}

buildSubtree("D", ..., usedLetters = ['A', 'B', 'C']) {
	allowedNeighbors = [];
	return Node("D", children = []);
}

function buildSubtree(grid, alreadyUsedLetters, letter) {
	// What letter is the root of this subtree.

}

// This function creates a Node for the graph.
// What things does this need to know?
// What are the arguments this needs?
// What steps are needed to build *just this* node.
function buildNode(givenGrid) {
	const charactersInArray = givenGrid.join('').split('')
	// console.log(charactersInArray)
	const parentNode = new Node(charactersInArray[0]);
	if(charactersInArray.length !== 1){
		charactersInArray.shift()
		const visited = [];
		for(let i = 0; i < charactersInArray.length; i++ ){
			const child = new Node(charactersInArray[i]);
			buildNode(charactersInArray);
			parentNode.children.push(child);
			visited.push(charactersInArray)
			console.log(parentNode)
			// if(parentNode.children.length !== 1){
			// 	const childrenCharacters = charactersInArray;
			// 	childrenCharacters.shift();
			// 	buildNode(childrenCharacters)
			// }
		};
	} else {
		console.log('leaf')
	}
	// chararcter
	// some information about the grid?  what neighbors are available?
	// what letters have been used already?
};
var grid = ['AB', 
						'CD'];

buildNode(grid)

// var grid = [['A', 'B'], ['C', 'D']];


// Constraints:                                                                                    
// - The input will always be a well-formed grid (all rows are the same length)                    
// - Ships can only be horizontal or vertical, not diagonal                                        
// - Ships will never touch each other

// Input: Array -> ocean
// Output: Int -> number of ships

let ships = [
	['.', '.', '.', 'S'],
	['.', '.', '.', 'S'],
	['S', 'S', '.', 'S'],
	['.', '.', '.', 'S']
]

function dfs(x, y, ships) {
  if (ships[x] === undefined || ships[x][y] === undefined || ships[x][y] === ".") return;

  ships[x][y] = "."

  dfs(x + 1, y, ships)
  dfs(x - 1, y, ships)
  dfs(x, y + 1, ships)
  dfs(x, y - 1, ships)
}
