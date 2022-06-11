var lastStoneWeight = function(stones) {
	const sortedStones = stones.sort((a,b) => b-a)
	for(let i = 0; i <= sortedStones.length; i++) {
			if(sortedStones.length === 0){
					return 0
			} else if(sortedStones.length === 1){
					return sortedStones[0]
			} else if(sortedStones[i] === sortedStones[i+1]){
					// Adjusting length of the array
					sortedStones.splice(i,2);
					i--;
			} else if(sortedStones[i] !== sortedStones[i+1]){
					sortedStones.splice(i,2,sortedStones[i]-sortedStones[i+1]);
					i--;
					sortedStones.sort((a,b) => b-a)
			}
	}
};
console.log(lastStoneWeight([8,7,4,2,1,1]));
// Input: [8,7,4,2,1,1]
// Output: 1