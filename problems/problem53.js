// Implement a recursive depth-first search that you fully understand and could reproduce in front of someone from scratch if you needed to.

// Then, run your DFS implementation on some example graphs. This means being comfortable with how to represent a graph with nodes and edges in your preferred interview language.

// This will become the foundation for the Boggle solver.

const binaryTree = {
	id: 0,
	left:{
		left:{
			left:{},
			right:{},
			id:5
		},
		right:{
			left:{},
			right:{},
			id:6
		},
		id: 2
	},
	right: {
		left: {
			left:{},
			right:{},
			id:3
		},
		right: {
			left: {},
			right: {},
			id:4
		},
		id: 1
	}
}

// https://en.wikipedia.org/wiki/Depth-first_search
// Vertex orderings

var oneNode = {
	id: 0,
}

DFS(oneNode);
// 0

var DFS = (node) {
	console.log(node.id);
}

var twoNodes = {
	id: 0,
	left: {
		id:1,
	}
};

// https://parentheticallyspeaking.org/articles/how-not-to-teach-recursion/
// discusses other ways to teach/learn recursion.
// https://www.enjoyalgorithms.com/blog/recursion-explained-how-recursion-works-in-programming

DFS(twoNodes);
// 0, 1

var DFS = (node) {
	if (!node) return;
	console.log(node.id);
	DFS(node.left);
}

var threeNodes = {
	id: 0,
	left: {
		id:1,
	},
	right: {
		id: 2,
	}
};

// Print order?

var otherThreeNodes = {
	id: 0,
	left: {
		id:1,
		right: {
			id: 2,
		}
	},
};

// print order?


// output: 0, 2, 5, 6, 1, 3, 4
const DFS = (node) => {
	// 
}

// What order will this print in?
// DFS(binaryTree)
// 0, 2, 5, 6, 1, 3, 4