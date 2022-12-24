function myForEach(arr, forEachFunc){
	for(let i = 0; i < arr.length; i++){
		forEachFunc(arr[i], i, arr);
	};
}

myForEach([1,5,7,8], (el, index, array) => {
	console.log(el + 2);
	console.log(index);
	console.log(array);
});

// [1,5,7,8].forEach(el => {
// 	console.log(el + 2);
// })