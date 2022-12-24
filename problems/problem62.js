// Given a string, build a graph, of the letters in that string
// The first letter should be the root.
// The last letter should be a leaf node (no children).

// Provide a Node class (allowing multiple children).
class Node{
	constructor(letter){
		this.letter = letter; // one character strings
		this.children = []; // Nodes
	}
}

// GraphFromString should be recursive (call itself).
// function graphFromString(string) {
// 	console.log(string[0])
	
// }


// graphFromString("abc");


// b -- root
// c
// d
// ''
function graphFromString(string /* "bcd" */) {
	if (!string) {
		return null
	}
	var next = string.slice(1);
	var child = graphFromString(next);
	var node = new Node(string[0]);
	if (child) {
		var children = [child]
		node.children = children
	}
	return node;
}

graphFromString("abcde") {
	graphFromString("bcde") {
		graphFromString("cde") {
			graphFromString("de") {
				graphFromString("e") {
					
				}
			}
		}
	}
}



// // Style #1: Caller must check, empty not allowed
// function foo(string) {
// 	if (!string) {
// 		throw "string required".
// 	}
// 	var next = string.slice(1);
// 	if (next) {
// 		foo(next);
// 	}
// }

// // Style #2: empty turns into null, caller must check return value.
// function bar(string) {
// 	if (!string) {
// 		return null;
// 	}
// 	var next = string.slice(1);
// 	var child = bar(next);
// }


// graphFromString("bcd") {
// 	graphFromString("cd") {
// 		graphFromString("d") {
// 			// ?graphFromString("")//??
// 			// How does stop?
// 		}
// 	}
// }


function stringFromGraph(node) {
	if (!node) {
		return null;
	}
	if (node.children?.length != 0) {
		return node.letter + stringFromGraph(node.children[0]);
	}
	return node.letter;
}

// var node = new Node('a');
// console.log(stringFromGraph(node));

// var node2 = new Node('a');
// node2.children = [new Node('b')];
// console.log(stringFromGraph(node2));

console.log(stringFromGraph(graphFromString('')));
console.log(stringFromGraph(graphFromString('abcd')));
