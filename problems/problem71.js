// output example: [1,3,2,1]

const func = (nums) => {
	const test = [...nums];
	for (let i = 0; i < nums.length; i++) {
		test.push(nums[i]);
	};
	return test;
};

console.log(func([1,3,2,1]));