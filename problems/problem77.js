function solution(arr){
	const answer = []
	for(let i = 0; i+2 < arr.length; i++) {
		if(arr[i] > arr[i+1] && arr[i+1] > arr[i+2] || 
			arr[i] < arr[i+1] && arr[i+1] < arr[i+2]) {
				answer.push(1)
			}else{
				answer.push(0)
			}
	}
	return answer
}
console.log(solution([1,2,1,-4,5,10]))