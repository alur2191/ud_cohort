// Implement a recursive depth-first search that you fully understand and could reproduce in front of someone from scratch if you needed to.

// Then, run your DFS implementation on some example graphs. This means being comfortable with how to represent a graph with nodes and edges in your preferred interview language.

// This will become the foundation for the Boggle solver.


// Generic graph
// class Node {
//     List<Edge> edges;
//     // additional data (e.g. city name, population, etc.)
// }

// class Edge {
//     Node first;
//     Node second;
//     // Additional data (length, speed limit, capacity, etc.)
// }

// Tree structure (ignoring edges)

// class Node {
//    List<Node> children,
// }

var structOne = {
    one: 1,
    two: 2,
};

var structTwo = {
    one: 3,
    two: 4,
}


function addToOne(struct, whatToAdd) {
    struct.one += whatToAdd;
}

addToOne(structOne, 1);

structOne.add(1);


class Node {
    constructor(id, children) {
        this.id = id;
        this.children = children;
    }
	 foo = function () {
		
		}
};

// Node.constructor(id, child);
// new Node(id, child);

root.foo()

var root = new Node(
    'root', [
        new Node('1', [
            new Node('4')
        ]),
        new Node('2'),
        new Node('3')
    ]
);


var root = {
    id: 'root',
    children: [
        { id: 1, children: [{ id: 4 }] },
        { id: 2 },
        { id: 3 },
    ]
};

var nodes = [
    { id: 'root' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    {ids: '17'},
    { id: '4' },
];

var edges = [
    { first: 'root', second: 1 },
    { first: 1, second: 4 },
    { first: 'root', second: 2 },
    { first: 'root', second: 3 },
];


// Homework: Next week, please have done this.
// 1. Build a few example graphs.
// Build some example graphs (3).

// 2. Write an implementation of depth first search.
// Write a function dfs(node), prints the ids in order.

// 3. Use your DFS implementation on your examples.
// Write expectations for what order you expect to see the Ids in.
// And validate those expectations with your examples.