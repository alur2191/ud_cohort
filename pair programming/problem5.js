// Write a function that takes a string phrase and returns a dictionary contains counts of how many times every character appears in phrase.
// Input: phrase - Type: String
// Output: character count - Type: Dictionary


// function countCharactersInPhrase(phrase){
// 	const characterCount = new Map();
// 	const firstTime = Date.now();
// 	// const iterator = character.values();
// 	for(let i = 0; i < phrase.length; i++){
// 		if(phrase[i] !== " "){
// 			// if character in the map returns falsy
// 			if(!characterCount.get(phrase[i])){
// 				characterCount.set(phrase[i],1)
// 			}else{
// 				characterCount.set(phrase[i], characterCount.get(phrase[i])+1)
// 			}
// 		}
// 	};
// 	console.log(firstTime);
// 	return characterCount
// }
// console.log(countCharactersInPhrase("string phrase and returns a dictionary"));

// console.log(Date.now());


function doSomething(phrase){
	let obj = {}
	const firstTime = Date.now();

	for (let x = 0; x < phrase.length; x++){
			if (obj[phrase[x]] === undefined){
				if (phrase[x] !== " "){
					obj[phrase[x]] = 1
					}
			}else{
					obj[phrase[x]]++
			}
	}
	
	console.log(firstTime);
	return obj
}

console.log(doSomething('bananna in the tail pipe'));

console.log(Date.now());
