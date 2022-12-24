var longestConsecutive = function(nums) {
	if(nums.length === 0 || nums == null) return 0

	const numsSet = new Set(nums);
	let max = 0;
	
	for(let num of numsSet) {
		if(numsSet.has(num - 1)) continue;

		let currNum = num;
		let	currMax = 1;

		while(numsSet.has(currNum+1)){
			currMax += 1;
			currNum += 1;
		}

		max = Math.max(max, currMax)
	}

	return max
};

console.log(longestConsecutive([1,0,-1]));