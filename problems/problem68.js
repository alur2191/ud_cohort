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

// Input: Array of strings
// Output: class -> root node


// Set the first character in the first element of the array as parent of a new node
// children = Remove the element that was just used to create a new node
// If children length isn't 0
// create subTree passing the first character in the first element




// 1. Stub out a function that takes as input a grid (e.g. a 2 x 2 or 4 x 4 matrix of letters) and returns all of the words that can be made from that grid.

function wordsFromBoggleGrid(grid) {
    return words;
}

// 2. Write a function to create a graph from the grid. [Goal: complete this sub-part in 30 minutes]
//     1. Refer back to your graph representations from Part I.
//     2. Test that you get the correct graph back from a grid.


class Node {
    // May move children out of constructor, may not know them at creation time.
    constructor(letter, children) {
        this.letter = letter;
        this.children = children ?? [];
	}

    addChild(child) {
        this.children.push(child);
    }
}

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Some way to represent the boggle grid.
class Grid {
    // Original letters passed in.
    // Keep track of which letters/positions have been used?
    constructor(listOfRows) {
        this.listOfRows = listOfRows;
    }

    // Given a position can return what letter is there.
    letterAt(position) {
        return this.listOfRows[position.y][position.x];
    }

    get width() { return this.listOfRows[0].length }
    get height() { return this.listOfRows.length }

    containsPosition(position) {
        if (position.x < 0) return false;
        if (position.x >= this.width) return false;
        if (position.y < 0) return false;
        if (position.y >= this.height) return false;
        return true;
    }

    // allPositions = function*() {
    //     for (var x = 0; x < this.width; x++) {
    //         for (var y = 0; y < this.height; y++) {
    //             yield new Position(x, y);
    //         }
    //     }
    // }

    allPositions() {
        var positions = [];
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                positions.push(new Position(x, y));
            }
        }
        return positions;
    }

    // Given a position can return what neighbors.
    neighborsFor(position) {
        var neighbors = [];
        // Neighbors in the range -1, 0, 1
        for (var dy = -1; dy <= 1; dy++) {
            for (var dx = -1; dx <= 1; dx++) {
                var neighbor = new Position(position.x + dx, position.y + dy);
                if (this.containsPosition(neighbor)) {
                    neighbors.push(neighbor);
                }
            }
        }
        return neighbors;
    }
}

class UsedPositions {
    // Used letters.
    constructor(positions) {
        this.positions = positions ?? [];
    }

    contains(position) {
        // Can't just use this.position.includes, because
        // new Position(0, 0) != new Position(0, 0) in javascript.
        // https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
        return this.positions.some(p => p.x == position.x && p.y == position.y);
    }

    copyWith(position) {
        var newPositions = this.positions.slice();
        newPositions.push(position);
        return new UsedPositions(newPositions);
    }
}

function possibleNextPositions(grid, usedPositions, currentPosition) {
    // For a given position.  Find all neighbors who have not yet been used.
    var unusedNeighborPositions = [];
    // TODO: rewrite as filter?
    for (var position of grid.neighborsFor(currentPosition)) {
        if (!usedPositions.contains(position)) {
            unusedNeighborPositions.push(position);
        }
    }
    return unusedNeighborPositions;
}

function possibleWordsSubtree(position, grid, usedPositions) {
    // Given a position, generate the subtree having chosen that position
    // as a root.
    var letter = grid.letterAt(position);
    var node = new Node(letter);
    usedPositions = usedPositions.copyWith(position);

    for (var childPosition of possibleNextPositions(grid, usedPositions, position)) {
        // Keep track of letters/positions already used.
        var child = possibleWordsSubtree(childPosition, grid, usedPositions);
        node.addChild(child);
    }
    return node;
}

function possibleWordsGraphFromGrid(grid) {
    // Build a tree of possible words
    // Starting at a root (with no letter)
    var root = new Node(); // Root has no letter yet picked.
    var usedPositions = new UsedPositions();
    // Building subtrees which represent the possible words made
    // by choosing a specific starting letter.
    for (var childPosition of grid.allPositions()) {
        // Keep track of letters/positions already used.
        var child = possibleWordsSubtree(childPosition, grid, usedPositions);
        root.addChild(child);
    }

    return root;
}

function allWordsWithPrefix(node, prefix) {
    var letter = node.letter ?? '';
    prefix = prefix + letter;
    var words = [prefix];
    for (var child of node.children) {
        words = words.concat(allWordsWithPrefix(child, prefix));
    }
    return words;
}

function allWordsFromTree(root) {
    return allWordsWithPrefix(root, '');
}

var root = possibleWordsGraphFromGrid(new Grid(['ab', 'cd']));
console.log(allWordsFromTree(root));


// 3. Set up a data structure containing all words in the dictionary, with efficient lookup. [Goal: complete this sub-part in < 10 minutes (you probably already have this implemented if you’ve completed the prior problems in this problem set)]
