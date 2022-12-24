// https://leetcode.com/problems/missing-ranges/

var findMissingRanges = function(nums, lower, upper) {
	// loop through array
			// array[i]++ != array[i++]--
					// resultArray.push(`${array[i]++}->${array[i++]}`)
			// else if array[i]++ === array[i++]--
					// resultArray.push(`${array[i]++}`)
			const result = [];
			for(let i = lower; i < nums.length; i++){
					if(nums[i]++ != nums[i++])	{
						result.push(nums[i])
					}else if(nums[i]++ != nums[i++]--){
						result.push(`${nums[i]++}->${nums[i++]}`)
					}else if(nums[i]++ === nums[i++]--){
						result.push(`${nums[i]++}`)
					}else if(nums[i++] === upper){
						result.push(`${nums[i]++}->${nums[i++]}`)
					}
			}
			return result;
	};

	console.log(findMissingRanges([0,1,3,50,75],0,99));