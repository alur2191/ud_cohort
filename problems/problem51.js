class Node {
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
}

class BiNode {
    constructor(name, left, right) {
        this.name = name;
        this.left;
        this.right;
    }
}

var binaryTree = new BiNode("root", new BiNode("left"), new BiNode("right"));


const node = {
    children: [],
    visited: false
}


function bfs(rootNode) {
    var queue = [rootNode];

    function visit(node) {
        queue.addAll(node.children);
        node.visited = true;
    }

    while (queue.isNotEmpty()) {
        visit(queue.pop());
    }
}

var tree = new Node("root", [
			new Node("a", [
					new Node("b")
			])
			, new Node("c")
	]);

const dfs = (rootNode) => {
    print("which node");
    dfs(someNode);
    dfs(someNode);
    dfs(someNode);
};

// Write out an example
// 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6 7  8


// fib(n) = fib(n-1) + fib(n-2)
// fib(n = 8) = fib(7) + fib(6)
// fib(n = 7) = fib(6) + fib(5)
// fib(n = 6) = 
// fib(n = 5) = fib(3) + fib(2)
// fib(n=3) = fib(2) + fib(1)


// fib(n=2) = fib(1) + fib(0)


// x fib(n=1) = 1
// x fib(n=0) = 1

// Input: which index in the squence to return
// output: value of the number at that index.
const fib = (index /* 4 */) => {
	
	if(index === 0 || index === 1) {
		return 1
	};

	return fib(index - 1 /* 3 */) + fib(index - 2 /* 2 */);
};

fibonacci(1)
// function dfs(rootNode) {
//     var queue = [rootNode];

//     function visit(node) {
//         node.visited = true;
//         var nextNode = node.children.first;
//         while (!nextNode) {
//             next
//         }
//         if (!nextNode) {
//             nextNode = node.nextSibling;
//         }

//         if (nextNode) {
//             queue.add(nextNode);
//         }
//     }

//     while (queue.isNotEmpty()) {
//         visit(queue.pop());
//     }
// }


