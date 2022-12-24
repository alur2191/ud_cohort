const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


const rot = (input, number) => {
	let encryptedMessage = '';
	for(let i = 0; i < input.length; i++) {
		// Check if character is uppercase
		// if(input[i] === input[i].toUpperCase()) {
		// 	isUpperCase = true;
		// }
		const indexOfLetter = alphabet.indexOf(input[i]);
		if(alphabet.indexOf(input[i]) + number > 25) {
			encryptedMessage += alphabet[indexOfLetter + number - 26];
		}else{
			encryptedMessage += alphabet[indexOfLetter + number];
		};
	};
	return encryptedMessage;
};

console.log(rot("XYZ", 3));

const fs = require('fs');
const words = fs.readFileSync('../sowpods.txt').toString().split('\n');


const decryptRot13 = (encryptedString,n) => {
	let decryptedString = '';
	// split encryptedString by space
	const encryptedWords = encryptedString.split(' ');
	for(let x = 0; x < encryptedWords.length; x++) {
		let testDecryption = '';
		encryptedString[x].toLowerCase()
		for(let y = 0; y < encryptedWords[x].length; y++) {
			// Find index of encryptedString character
			if(encryptedWords[x][y].toUpperCase() === encryptedWords[x][y]){
				testDecryption
			}
			const indexOfChar = alphabet.indexOf(encryptedWords[x][y].toUpperCase());
			// push index of char -= n to testDecryption string
			testDecryption += alphabet[indexOfChar-n];
		};

		console.log(testDecryption);
		if(words.includes(testDecryption)){
			decryptedString += `${testDecryption} `
		}else{
			n -= 1
			x = 0
		}
	}

	return decryptedString
};

decryptRot13("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft", 1);