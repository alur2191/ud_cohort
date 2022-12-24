// Input: mathematical expression -> String
// Ouput: stack result -> Int

const postfixNotionCalculator = (mathExpression) => {
	// Split string into math array 
	const math = mathExpression.split(' ');
	const stack = [];  

	for (let i = 0; i < math.length; i++) {
	// 	if element is a number - push to stack array
		if(math.length === 0){
			return stack[0]
		}
		if(isNaN(math[i+1])){
			for(let x = 0; x < math[i].length; x++){
				let mathIndex = i;
				console.log(math);
				console.log(math[i]);
				if(!isNaN(math[i])){
					executeOperation(math[i+1],stack[stack.length-1], math[i], stack)
					break;
				}else{
					mathIndex -= 1;
				}
			}
		}else{
			stack.push(parseInt(math[i]));
		};
		console.log(stack);
	};
	return stack;
};

const executeOperation = (opeartion, num1, num2, arr) => {
	if(opeartion === '*') {
		const calculate = num1 * num2;
		arr.pop();
		arr.push(calculate);
	}else if(opeartion === '+') {
		const calculate = num1 + num2;
		arr.pop();
		arr.push(calculate);
	}else if(opeartion === '-') {
		const calculate = num1 - num2;
		arr.pop();
		arr.push(calculate);
	}else if(opeartion === '/') {
		const calculate = num1 / num2;
		arr.pop();
		arr.push(calculate);
	}
}

// Error cases
// test cases.
// Unit testing / testing libraries

postfixNotionCalculator("1 3 4 * + 2 -");