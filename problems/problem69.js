// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
    var x = 1;
    while (true) {
        if (!A.includes(x)) {
            return x;
        }
        x++;
    }
}


function solution(A) {
    // Sort is in-place. You could also do a "sort and discard".
    // map(reduce())
    var bannedNumbers = A.sort();
	// write your code in JavaScript (Node.js 8.9.4)
    var x = 1;
    var bOffset = 0;
    while (true) {
        var found = bannedNumbers.find(x, startAt: bOffset);
        if (found == -1) {
            return x;
        }
        bOffset = found;
        x++;
    }
}
