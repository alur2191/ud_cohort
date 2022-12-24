let currentMonth = 0

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const monthDays = [ 31,	28,	31,	30,	31,	30,	31,	31,	30,	31,	30,	31 ]

const days = ['monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday', 'sunday', 'weeknday']

let currentDay = 4

function dayOfWeek () {
	if(currentDay==7){
		currentDay = 0
	} else {
		currentDay += 1
	}
}

function solution(month, day) {
	for(let i = 1; i <= monthDays[currentMonth]; i++) {
		if(months[currentMonth] == month){
			if (i == day) {
				return days[currentDay]
			}
		}else if(i==monthDays[currentMonth]){
			currentMonth += 1
			countDays(monthDays[currentMonth])
			i = 0
		}
		dayOfWeek()
	}
}

console.log(solution('February', 4))