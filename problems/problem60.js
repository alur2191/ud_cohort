// write a func that counts down from a number specified as a param to 0

const countToZero = (countdownNumber) => {
	return countdownNumber === 0 
	? console.log('Happy New Year') 
	: countToZero(countdownNumber - 1)
	// if(countdownNumber !== 0) {
	// 	console.log(countdownNumber);
	// 	countToZero(countdownNumber-1);
	// };
	// return true;
};

countToZero(10);

// write a func that counts down from a number specified as a param to 0

let sum = 0;

const counter = (countNumber) => {
	if(countNumber === 0 ){
		return true
	} else {
		sum += countNumber;
		counter(countNumber - 1)
	}
};

counter(3)

countToZero(10);

// write a func that takes an  nums === 0 even, nums === 1 odd. 

// LOOK INTO FUNCTION CURRYING


// write a func that takes an  nums === 0 even, nums === 1 odd. 

// LOOK INTO FUNCTION CURRYING

