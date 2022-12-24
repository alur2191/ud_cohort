var majorityElement = function(nums) {
	const sortedElementCount = [];
	const elements = [];
	for(let i = 0; i < nums.length; i++){
			if(!elements.includes(nums[i])){
					elements.push(nums[i]);
					let count = 0;
					for(let x = 0; x < nums.length; x++){
							nums[i] === nums[x] && count++;
					}
					sortedElementCount.push(count);
			}
	}
	sortedElementCount.sort((a,b)=> b - a)
	console.log(sortedElementCount);
	return sortedElementCount[0];
};

console.log(majorityElement([3,2,3]));