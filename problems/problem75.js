
// Given a singly linked list, delete a node at the nth
// position without using the loop.


class Node {
	constructor(value, next){
		this.value = value
		this.next = next
	}
}

function removeNode(node, n, current){
	// if current parameter == n 
		// 
	if(current!=n){
		node.
	}
}

var head = new Node("head", null);

head.next = new Node(1, new Node(2, null));

// What code do you need to write to "delete" node "1".
head.next = head.next.next
// head is now new Node("head", new Node(2, null))
// head.next = head.next.next // This will throw an error.
if (!head.next.next){
	head.next = null
} else {
	head.next = new Node( )
}


// How would you add '0' to the front of the list?
head.next = new Node(0, head.next)

head.next = new Node(1, new Node(2, new Node(3, null)));
// How would you remove the second item in the list?
// e.g. Node id "2".
// e.g. head = new Node(1, new Node(3, null));
head

function removeNextNode(node) {
	
}



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
function node_at_index(node, index) {
	var current = head;
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

	/*
	if we get to this line, the caller was asking
	for a non-existent element so
	we assert fail
	*/
	assert (false);
	return 0;
}

// search
function find_node_with_value(node, value) {
	var current = node;
	while (current != null) {
			if (current.data == value)
					return true; // data found
			current = current.next;
	}
	return false; // data not found
}

// insertion
// aka "push"
function node_prepend_node(node, new_data) {
	/*
	* 1 & 2: Allocate the Node & Put in the data
	*/
	var new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = node;

	/* 4. Move the head to point to new Node */
	node = new_node;
}

// insertion
function node_insert_after(node, new_node) {
	
}

// deletion
function node_pop(position) {
	if (head == null)
	return;

	// Store head node
	var temp = head;

	// If head needs to be removed
	if (position == 0) {
		// Change head
		head = temp.next;
		return;
	}

	// Find previous node of the node to be deleted
	for(i = 0; temp != null && i < position - 1; i++)
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