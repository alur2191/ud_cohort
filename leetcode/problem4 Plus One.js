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
//     }
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
