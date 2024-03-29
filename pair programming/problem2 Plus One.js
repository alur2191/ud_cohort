// https://leetcode.com/problems/plus-one/
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// var plusOne = function(digits) {
//     let numbers = ''
//     const result = []
//     for (let x = 0; x < digits.length; x++){
//         numbers += digits[x]
//     }
//     ++numbers
//     let string = numbers.toString()
//     let split = string.split('')
//     for (let number of split) {
//       result.push(parseInt(number))
//     
//   return result
// };

function plusOne(digits) {
  let result = []
  let wholeNumber = digits.join('')  
  parseInt(wholeNumber++)
  let stringWholeNumber = wholeNumber.toString().split('')
  stringWholeNumber.forEach(number => result.push(parseInt(number)))
  return result
}

console.log(plusOne([2,9,9]));

// function plusOne2(digits){
// // Reversed the array [8, 8, 2]
// if element 0 in the array is 0-8
	// Increment element 0 [9, 8, 2] and reverse
// else if element 0 === 9, change element 0 = 0
// }
