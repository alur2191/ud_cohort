var isPalindrome = function(head) {
	const uneditedHead = [...head];
	return uneditedHead === head.reverse() ? true : false;
};

console.log(isPalindrome([1,2]));