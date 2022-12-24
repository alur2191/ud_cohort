// https://leetcode.com/problems/two-sum/

// First Attempt 
var twoSum = function(nums, target) {
	for(let i = 0; i < nums.length; i++){
		for(let x = 0; x < nums.length; x++){
			console.log(x,i,x!=i);
			if(i != x && nums[i]+nums[x] === target){
				return [nums.indexOf(nums[i]),nums.indexOf(nums[x])];
			};
		};
	};
};

console.log(twoSum([3,3],6));