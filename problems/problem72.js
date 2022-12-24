// const arr = ['1', '-']

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]+">>>>",isNaN(arr[i]))
// }


const calculator = (nums) => {
	const arr = nums.split(' ')
	const stack = []

	const operate = (operation) => {
		if (operation == "+") {
			const calc = stack[stack.length-1] + stack[stack.length-2]
			stack.pop()
			stack.pop()
			stack.push(calc)
		} else if(operation == "-") {
			const calc = stack[stack.length-1] - stack[stack.length-2]
			stack.pop()
			stack.pop()
			stack.push(calc)
		} else if(operation == "POP") {
			stack.pop()
		} else if(operation == "DUP") {
			stack.push(stack[stack.length])
		}
	}

	for (let i = 0; i < arr.length; i++) {
		const op = arr[i]
		if (isNaN(arr[i])) {
			operate(op)
		} else {
			stack.push(parseInt(op))
		}
	}

	return stack[stack.length-1]
}







const calculator2 = (nums) => {
	const arr = nums.split(' ')
	const stack = []

	const operate = (operation, opIndex) => {
		if (operation == "+") {
			const calc = arr[operation] + arr[opIndex-1]
			stack.pop()
			stack.pop()
			stack.push(calc)
		} else if(operation == "-") {
			const calc = arr[operation] - arr[opIndex-1]
			stack.pop()
			stack.pop()
			stack.push(calc)
		} else if(operation == "POP") {
			stack.pop()
		} else if(operation == "DUP") {
			stack.push(stack[stack.length])
		}
	}

	for (let i = 0; i < arr.length; i++) {
		const op = arr[i]
		if (isNaN(arr[i])) {
			stack.push(parseInt(op))
		} else {
			operate(op, i)
		}
	}

	return stack[stack.length-1]
}


calculator('1 5 6 - 3 + 5')