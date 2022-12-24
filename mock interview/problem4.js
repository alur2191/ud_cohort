// Question 2: Walking in San Francisco (HARD, I would say this question is probably the hardest you'd get)
// Walking is San Francisco is hard work because of all of the hills!
// You are given a topographical map of San Francisco as a matrix, M, where each cell represents the elevation at that each point. You can move from any square to any adjacent square (up, down, left, right only, no diagonals!). The effort required to walk from square to square is the absolute value of the difference in elevation between them. For example, for
// M = [[1, 3, 4],
//      [4, 9, 2],
//      [5, 5, 4]]
// the effort to move from point (0,0) to point (0,1) is 2 (|3-1|) and the total effort to move from (0,0) to (0,1) to (1,1) is 8 (|3-1| + |9-3|).
// You are at point (start_x, start_y) and need to get to (end_x, end_y). Write a function min_effort that takes in the starting point and ending point and returns the minimum amount of effort it would take to move from start_x to start_y through any path.
// If you can't think of an efficient way to do it, at least think about a brute force solution!


// Determine how many moves and which direction to the horizontally (X) are needed
// Determine how many moves and which direction to the vertically (Y) are needed
// Each move, determine which action (X or Y) is the least costly
// Return amount of effort needed to get to the end

const determineNumberOfMoves = (grid, start, end) => {
	let xMovesRequired = end[0] - start[0]
	let yMovesRequired = end[1] - start[1]
	grid[start[0]][start[1]+1] > grid[start[0]+1][start[1]]
}

const makeMove = () => {

}


const M = [[1, 3, 4],
		 [4, 9, 2],
     [5, 5, 4]];

determineNumberOfMoves(M, [0,1], [2,2])