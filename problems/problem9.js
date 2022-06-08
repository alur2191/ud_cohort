// Takes in an argument
// specify TYPE of arguments
function format(time){
	const stringTime = time.toString()
	return stringTime.length === 2 ? stringTime : '0' + stringTime
}

console.log(format(8));