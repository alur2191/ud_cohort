const fs = require('fs');
const file = fs.readFileSync("../WordPlay/sowpods.txt")
const theWords = file.toString().split('\n')


// [ ] Finding alphabet chains:
//     - First, what are all of the words that have a least one "A", one "B", one "C", one "D", one "E", and one "F" in them, in any order?
//         - For example, "FEEDBACK" is an answer to this question
function wordsIncludingABCDEF(word) {
    let includedLetters = 'ABCDEF'
    for (let char of includedLetters){
        if (!word.includes(char)){
            return false
        }
    }
    return true
}

// console.log(wordsIncludingABCDEF("FEEDBACK"));

function getWordsIncludingABCDEF() {
    // Created a result array to push qualifying words into
    let result = []
    for (let word of theWords){
         // Testing each word in theWords array against the call to the helper function wordsIncludingABCDEF()
        if (wordsIncludingABCDEF(word)){
            result.push(word)
        }
    }
    return result
}

console.log(getWordsIncludingABCDEF());


// - Next, is "ABCDEF" the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.
function alphabetChains() {
    // Create a string of all letters in the alphabet to compare too.
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // Create a result array to push all qualifying alphabet chains into. 
    let result = []

    // Loop through the words in the scrabble dictionary
    for (let word of theWords){
        // Create a new Set() to aviod the issue of duplicate letters
        let wordSet = new Set(word)
        // Create a sorted array from the set for easier compairing.
        let wordSetArray = Array.from(wordSet).sort()
        // Create an inner loop to target the individual word.
        for (let x = 0; x < wordSetArray.length; x++){
            // Created an alias for the subString of the current word
            let wordSubString = wordSetArray.join('').substring(x)
            if (alphabet.includes(wordSubString)){
                // Push only when the result array is empty
                if (result.length === 0){
                    result.push(wordSubString)
                // Check the length of every alphabet chain comparing it to whats in the result array
                }else if (wordSubString.length > result[0].length){
                    result = [wordSubString]
                }
            }
        }
    }
    return result
}
    

console.log(alphabetChains());