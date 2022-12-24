// Write a function that take a string and returns bool, return true if balanced ()
// Input: string -> paranthesis
// Output: bool -> if balanced or not

const checkIfBalanced = (string) => {
	const balancedCheck = [];
	// loop through the string
	let bracketCheck = '';
	const bracketsDictionary = {
		')': '(',
		']': '[',
		'}': '{'
	}
	for(let i = 0; i < string.length; i++) {
		const lastBalancedCheck = balancedCheck[balancedCheck.length-1]
		// if character === '('
		if(string[i] === '(' || string[i] === '[' || string[i] === '{') {
			// push to balancedCheck array
			balancedCheck.push(string[i]);
			// bracketCheck = string[i];
		} else if(string[i] === ')' || string[i] === ']' || string[i] === '}') {
			// if last element of balancedCheck array is '('
			if(bracketsDictionary[string[i]] === balancedCheck[balancedCheck.length-1]) {
				balancedCheck.pop()
			}
		}
	}
	if(balancedCheck.length !== 0 ){
		return false
	}
	return true
}

console.log(checkIfBalanced('([]{})'));