// Write a function that takes two arguments, hour and minutes, and returns a string formatted for the time as a total duration.
const formatTime = (hours, minutes) => {
	let formattedHours = hours < 10 ? `0${hours}`: hours;
	let extraMinutes = minutes;
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes > 60 ? splitMinutes() : minutes
	function splitMinutes(){
		if(extraMinutes > 59){
			extraMinutes = extraMinutes - 60
			formattedHours++
			splitMinutes()
		}
		return extraMinutes
	}
	return  formattedHours + ':' + formattedMinutes
}


console.log(formatTime(0,140));