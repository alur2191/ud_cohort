// Implement a recursive depth-first search that you fully understand and could reproduce in front of someone from scratch if you needed to.

// Then, run your DFS implementation on some example graphs. This means being comfortable with how to represent a graph with nodes and edges in your preferred interview language.

// This will become the foundation for the Boggle solver.

// class Node{
// 	constructor(val){
// 		this.val = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// class Node{
// 	constructor(val){
// 		this.val = val;
// 		this.children = [];
// 		this.three = null;
// 	}
// }


// // DO THIS TEST CASE FIRST.
// // AB
// // CD

// //       A
// // B     C      D
// // C  D  B  D   B  C
// // D  C  D  B   C  B

// //       A
// // B     C      D
// // C  D  B  D   B  C
// // D  C  D  B   C  B

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");
// const e = new Node("C");
// const f = new Node("D");
// const g = new Node("D");
// const h = new Node("C");
// const i = new Node("B");
// const j = new Node("D");
// const k = new Node("D");
// const l = new Node("B");
// const m = new Node("B");
// const n = new Node("C");
// const o = new Node("C");
// const p = new Node("B");

// a.children = [b,c,d];
// b.children = [c,d];
// e.children = [g];
// f.children = [h];
// c.children = [i,j];
// i.children = [k];
// j.children = [l];
// d.children = [m,n];
// m.children = [o];
// n.children = [p];

// const dfs = (root) => {
// 	if(root === null) return;

// 	dfs(root.left);
// 	dfs(root.right);
// };


// A.left = B;
// A.right = C;
// B.left = d;
// B.right = e;
// C.left = f;
// C.right = g;

// const a = new Node(9);
// const b = new Node(5);
// const c = new Node(15);
// const d = new Node(4);
// const e = new Node(7);
// const f = new Node(13);
// const g = new Node(19);


// //  		  9
// //  	  /   \
// //    5     15
// //   /	\    / \
// //  4	 7  13 19

// const dfs = (root) => {
// 	if(root === null) return;

// 	dfs(root.left);
// 	dfs(root.right);
// };

// dfs(a);


// 	 		      9
// 	 	    /        \
// 	    5           15
// 	  /	  \       /    \
//	 3	   7     13    19
//	/ \	  / \   / \    / \
// 1	 4 6   8 10 14 17  24

// class Node {
// 	constructor(val){
// 		this.val = val;
// 		this.left = null;
// 		this.right = null;
// 	};
// };

// const a = new Node(9);
// const b = new Node(5);
// const c = new Node(15);
// const d = new Node(3);
// const e = new Node(7);
// const f = new Node(13);
// const g = new Node(19);
// const h = new Node(1);
// const i = new Node(4);
// const j = new Node(6);
// const k = new Node(8);
// const l = new Node(10);
// const m = new Node(14);
// const n = new Node(17);
// const o = new Node(24);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;
// d.left = h;
// d.right = i;
// e.left = j;
// e.right = k;
// f.left = l;
// f.right = m;
// g.left = n;
// g.right = o;

// const dfs = (root) => {
// 	if(root === null) return;
// 	dfs(root.left);
// 	console.log(root.val);
// 	dfs(root.right);
// }

// dfs(a);



// 	 		      49
// 	 	    /         \
// 	    33           84
// 	  /	   \       /    \
//	 21	   40     62    104
//	/ \	   / \   / \    /  \
// 5	 29 38 45 54  67 93  166

// class Node {
// 	constructor(val){
// 		this.val = val;
// 		this.left = null;
// 		this.right = null;
// 	};
// };

class Node {
	constructor(val){
		this.val = val;
		// this.parent = null;
		this.children = [];
	};
};

const gridToGraph = () => {
	
};

	// const a = new Node("A");
	// const b = new Node("B");
	// const c = new Node("C");
	// const d = new Node("D");
	// const e = new Node("C");
	// const f = new Node("D");
	// const g = new Node("D");

	// addChild(node) {
	// 	assert(
	// 	this.children.push(node);
	// 	node.parent = this;
	// }

	// removeChild(node) {
	// 	assert(node in this.children);
	// 	this.children.remove(node);
	// 	node.parent = null;
	// }


// const a = new Node('a');
// const b = new Node('b');

// a.children.push(b);
// a.addChild(b);

// const a = new Node(49);
// const b = new Node(33);
// const c = new Node(84);
// const d = new Node(21);
// const e = new Node(40);
// const f = new Node(62);
// const g = new Node(104);
// const h = new Node(5);
// const i = new Node(29);
// const j = new Node(38);
// const k = new Node(45);
// const l = new Node(54);
// const m = new Node(67);
// const n = new Node(93);
// const o = new Node(166);


// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;
// d.left = h;
// d.right = i;
// e.left = j;
// e.right = k;
// f.left = l;
// f.right = m;
// g.left = n;
// g.right = o;


const binaryTreeDfs = (root) => {
	if ( root === null ) return;

	binaryTreeDfs(root.right);
	console.log(root.val);
	binaryTreeDfs(root.left);
};

binaryTreeDfs(a);

// write dfs which works with multi-child trees.

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');

const findWordsFromGridLetters = (grid) => {
	const validWords = [];



	// const gridStringified = grid.join('');
	// // loop through words
	// for (let i = 0; i < words.length; i++) {
	// 	const testWord = [];
	// 	const word = words[i];
	// 	// if word length <= gridStringified.lengeth
	// 	if (word.length <= gridStringified.length) {
	// 		// loop through gridStringified
	// 		for(let y = 0; y < gridStringified.length; y++) {
	// 			const letter = gridStringified[y];
	// 			// if gridLetters includes letter
	// 			if (word.includes(letter)) {
	// 				// add letter to testWord array
	// 				testWord.push(letter)
	// 			};
	// 		};
	// 	};
	// 	if (testWord.length === word.length) {
	// 		// push to validWords array	
	// 		validWords.push(word)
	// 	};
	// };
	return validWords;
}

console.log(findWordsFromGridLetters([
	"ZQQZ",
	"ZAEZ",
	"ZUDZ",
	"ZQQZ"]));


function createTreeFromGrid(grid) {
	var tree = new Node();
	return tree;
}

// https://www.puzzle-words.com/boggle-4x4/
// The rules are simple.
// You have to find as many words as possible on the grid.
// You can move from one letter (dice) to another if it is
// a neighbour (in all directions).
// You cannot use a letter (dice) more than once in a word.
// You get points for each word - the more letters the better.
// The puzzle is solved when you collect 30%, 60% or 90% of the total possible points depending on the difficulty.

// var grid = ['AB', 'CD'];
let gridIndex = 0;

// loop through words
	// 

findPossibleWords(grid.length);

// DO THIS TEST CASE FIRST.
// AB
// CD

//       A
// B     C      D
// C  D  B  D   B  C
// D  C  D  B   C  B

// Things you might do?
// count the number of nodes in the tree and make sure
// there are 16.
// Count the number of leaf nodes, see there are 6?


// Example of using tree for dictionary

class Node{
	constructor(val){
		this.val = val;
		this.children = [];
		this.three = null;
	}
}

var grid = ['AB', 'CD'];

const gridToTree = () => {
	for(let i = 0; i < grid.join().length; i++) {
		
	};
};

// Homework?
function isWordInDictionary(word) {
	// Only valid if last letter is a leaf.
}

function isValidPrefix(prefix) {
	// Only valid if all letters in prefix are nodes.
}


// const gridWordFinder = (grid) => {
// 	const wordsMadeFromGrid = [];
// 	const gridArray = [];
// 	const gridStringified = grid.join('');
// 	for (let y = 0; y < gridStringified.length; y++) {
// 		gridArray.push(gridStringified[y]);
// 	};
// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length <= gridStringified.length) {
// 			const word = words[i];
// 			for (let x = 0; x < word.length; x++) {
// 				const character = word[x];
// 				if (gridArray.includes(character)) {
// 				}
// 				if (checkWordMap.entries.length === word.length) {
// 				}
// 			};
// 		}
// 	};
// 	console.log(wordsMadeFromGrid);
// };
