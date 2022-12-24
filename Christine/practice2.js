function myMapFunc(arr, fn){
	const arr = [];
	for(let i = 0; i < arr.length; i++){
		arr.push(fn(arr[i],i,arr));
	};
	return arr
};

const addThree = (num,index,array) => {
	return num + 3;
}

// [1,3,5,6].map(addThree);

myMapFunc([1,3,5,6],addThree);