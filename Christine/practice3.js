function push(arr, el){
	arr[arr.length] = el;
	return arr.length;
};

const numbers = [3,5,7];

// push(numbers,9);

console.log(push(numbers,9));