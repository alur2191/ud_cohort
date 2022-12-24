// Write out a singlely linked list implementation, including
// implementations of the following functions:
// You're welcome to use the internet as reference, but you
// should expect to explain your implementation next week.
// I will also expect you to explain the Big-O of your
// implementations.

// I expect you to have a class Node, and support at least
// push, pop, append, prepend, search by value,
// insert at index and remove at index.

class Node {
	// e.g.?
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

// access
// Like array[x]
function node_at_index(node, index) {
	var current = node;
	var count = 0;
	/*
		index of Node we are currently looking at
	*/
	while (current != null) {
		if (count == index)
			return current.data;
		count++;
		current = current.next;
	}

	// if there is no node at an index, we will get to this line and return null
	return null;
}

// search
// like array.find()
function find_node_with_value(node, value) {
	var current = node;
	while (current != null) {
		if (current.data == value)
			return current; // data found
		current = current.next;
	}
	return null; // data not found
}

// insertion
// like array.insertBefore(index, newValue) or array.shift
// Insert a new node for value, just before "node"
// List: q, r, s, passing value: p
function node_insert_before(node, value) {
	return new Node(value, node)
}

// insertion
// Insert a new node for new_data, just after "node"
function node_insert_after(node, value) {
	const new_node = new Node(value, node.next)
	node.next = new_node
}

// deletion
function node_remove_last(node) {

}

function delete_at_index(node, position) {
	if (node == null)
		return;

	var temp = node;
	if (position == 0) {
		node = temp.next;
		return;
	}

	// Find previous node of the node to be deleted
	for (i = 0; temp != null && i < position - 1; i++)
		temp = temp.next;

	// If position is more than number of nodes
	if (temp == null || temp.next == null)
		return;

	// Node temp->next is the node to be deleted
	// Store pointer to the next of node to be deleted
	var next = temp.next.next;

	// Unlink the deleted node from list
	temp.next = next;
}

// deletion
function node_remove_node_after(node) {

}

// For extra credit, sort by value!
// (btw, singlely linked lists are *terrible* for sorting).
// You can make your list doubly-linked to implement
// sorting if you like, but you'd need to update your functions
// above (or write new doubly-linked copies).
function sort(node) {

}

// Homework if you want it.
// Implemen a Class for (doubly?) Linked list with the following signature:
var list = new LinkedList();
list.push("a");
print(list.count()); // should be 1.
var a = list.pop(); // should be 'a'



// has buckets for storage.
// It has a hash function
// When you go to store something or look it up
// you hash the key, and then find the bucket corresponding to
// that hash.  A simple way to do that is to just hash the key
// and then do modular division (%) of the value, by the number
// of buckets.
// You *will* have collisions, unless you have more buckets
// than you do values.
// In that case, the bucket turns into an array instead of a
// single value, and then you have to search manually
// within that array, or append/prepend to the bucket.
class HashTable {
	constructor(size) {
		this.buckets = new Array.filled(size, []);
	}

	function hash(string) {
	// var value = 0;
	// string.forEachCharacter(() {
	// 	value = (value + string.charCode) % value.maxInt;
	// })
	// return value;
}
}