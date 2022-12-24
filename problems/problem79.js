// ​​This is a 60 minute interview question.
// ​​
// ​​Write a function that counts of the number of ships in a 2D grid.
// ​​Input: an array of arrays of strings, representing a 2D grid. The strings are either a "."​ for open water, or an "S"​ for part of a ship. Connected "S"​es are part of the same ship.
// ​​Output: an integer that is the count of the number of ships in the grid.
// ​​
// ​​Facts about ships:
// ​​Ships are only horizontal or vertical, not diagonal.
// ​​Ships have a width of one or more and a height of one or more.
// ​​Ships never touch each other.
// ​​
// ​​The input will always be a well-formed grid (all rows are the same length).

function countShips(shipsSample){
	// count ships that do not touch other ships to the left or to the bottom
	// Itterate through rows
		// itterate through items in the rows
			// if item is a ship
				// incremenet counter
				// 
	let row = 0
}

// Question: 

countShips(ships)

let ships = [
	[".", "S", ".", "S"],
	[".", ".", ".", "S"],
	["S", "S", ".", "S"],
	[".", ".", ".", "S"]
]


// Not a recommended appraoch.
class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isAdjacentTo(space) {
			// if shipsCountObject contains 
    }
}


function areAdjacent(x1, y1, x2, y2) {
    // Example: 0,0 is adjacent to 0,1 and 1, 0
    // if (x1 == 0 && y1 == 0) {
    //     if (x2 == 0 && y2 == 1) return true;
    //     if (x2 == 1 && y2 == 0) return true;
    // }
    // return false;
		
		if (x1 == 0 && y1 == 0) {
        if (x2 == 0 && y2 == 1) return true;
        if (x2 == 1 && y2 == 0) return true;
    }
    return false;
}



class Ship {
    constructor(spaces) {
        this.spaces = spaces || [];
    }
}

// I would not recommend this approach, but, one way would be
// Walk through, all S's, turn them into Ship([Space(x, y)])
// Walk through all found ships, find adjact ships and join them.


// Pipes are common on command line: cat "foo" | less;
// var x = 3 | 7; // bitwise or of 3 and 7 (3 = 11b, 7 = 111b, 3 | 7 = 111)
// var y = 3 || 7; // 3

let ships = [
    ["S", "S", ".", "S", "S", "S", ".", "."],
    ["S", "S", ".", "S", "S", "S", ".", "."],
    ["S", "S", ".", ".", ".", ".", "S", "S"]
]