// Question 1: Level Traversal (Super fair game for phone screen)
// Given the root of a graph, print out the elements of the graph in "level order", e.g. this graph would print out A B C D E F G H I J K L M https://bit.ly/3QK5JHC




// Question 2: Walking in San Francisco (HARD, I would say this question is probably the hardest you'd get)
// Walking is San Francisco is hard work because of all of the hills!
// You are given a topographical map of San Francisco as a matrix, M, where each cell represents the elevation at that each point. You can move from any square to any adjacent square (up, down, left, right only, no diagonals!). The effort required to walk from square to square is the absolute value of the difference in elevation between them. For example, for
// M = [[1, 3, 4],
//      [4, 9, 2],
//      [5, 5, 4]]
// the effort to move from point (0,0) to point (0,1) is 2 (|3-1|) and the total effort to move from (0,0) to (0,1) to (1,1) is 8 (|3-1| + |9-3|).
// You are at point (start_x, start_y) and need to get to (end_x, end_y). Write a function min_effort that takes in the starting point and ending point and returns the minimum amount of effort it would take to move from start_x to start_y through any path.
// If you can't think of an efficient way to do it, at least think about a brute force solution!

// Question 3: Backtracking Patterns (Here is one for backtracking practice)
// Question 3a (pretty easy)
// Given a list of words which may or may not repeat, you can see patterns in them. For example for "race car race" you can say the pattern is "aba" or for "race car car race bike car" you can say the pattern is "abbacb". We want to write a function which does the reverse: checks if a sequence of words follows a pattern!
// Write a function checkPattern which takes in a sequence of words and a pattern as a string of characters and returns true if the sequence follows the pattern and false otherwise, e.g.
// checkPattern(["foo", "bar", "foo", "bar"], "abab") is true!
// Question 3b (pretty difficult, backtracking required to be fast)
// We know that ["race", "car", "car", "race"] follows the pattern "abba" but if you were given the string "racecarcarrace" and the pattern "abba" could you write a function which figures out how to partition the first string into substrings such that it follows the pattern?
// Write a function findPatternMatch which takes in a string and a pattern (also as a string) and finds all possible partitions of the first string into substrings such that they follow the pattern, e.g.
// findPatternMatch("ffaaff", "aba") should return [["ff", "aa, "ff], ["f", "faaf", "f"]]  because both "ff aa ff" and "f faaf f" follow the pattern "aba".