// Balanced Groups
// Given a string containing parentheses "()", braces "{}", and brackets "[]", write a predicate function that returns whether or not the given string is balanced. A string is considered balanced iff:

// Every opening parenthesis, brace, or bracket has a matching closing parenthesis, brace, or bracket respectively (and vice-versa)

// No group is closed until all inner groups are closed

// Input: string with brackets -> string
// Output: is string balanced -> boolean

const checkIfBalanced = (input) => {
	const bracketStack = [];
	// Loop through the string
	const bracketMapping = {
		'}': '{',
		')': '(',
		']': '['
	};
	for(let i = 0; i < input.length; i++) {
		const char = input[i];
		// if character is openning any of the openning brackets push character to bracketStack
		if(char === '(' || char === '[' || char === '{') {
			bracketStack.push(char);
		} else if(char === ')' || char === ']' || char === '}'){
			if(bracketMapping[char] === bracketStack[bracketStack.length - 1]){
				bracketStack.pop()
			}else{
				return false;
			};
		};
	};
	if(bracketStack.length !== 0 ) return false
	return true;
};

const testcase1 = '[(])';
const testcase2 = '[(]';
const testcase3 = '[()]';
const testcase4 = '[';

console.log(checkIfBalanced(testcase4));

