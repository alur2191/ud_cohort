// wirte a fun takes 3 vars - r,g,b and converts rgb to hex
// Input: Numbers -> RGB
// Output: String -> Hex

// convert HEX to RGB

const convertRgbToHex = (r, g, b) => {
	let hex = '';
	hex += convertArguemnt(r)
	hex += convertArguemnt(g)
	hex += convertArguemnt(b)
	return hex;
};

const convertArguemnt = (color) => {
	// const convertedColor = color.toString(16);
	
	console.log(hexCalculator(color));

	if(convertedColor.length === 1) {
		return "0" + convertedColor
	} else {
		return convertedColor
	};
};

const hexCalculator = (rgbNumber) => {
	const doubleDigitMap = {
		10: 'a',
		11: 'b',
		12: 'c',
		13: 'd',
		14: 'e',
		15: 'f'
	}

	for (let innerIndex = 0; innerIndex <= 16; innerIndex++) {
		for (let outerIndex = 0; outerIndex <= 16; outerIndex++) {
			if(innerIndex?innerIndex*outerIndex:outerIndex===rgbNumber){
				console.log(">>>",innerIndex >= 10 ? doubleDigitMap[innerIndex] : innerIndex);
				console.log(outerIndex >= 10 ? doubleDigitMap[outerIndex] : outerIndex)
				// return innerIndex >= 10 ? doubleDigitMap[innerIndex] : innerIndex + 
				// outerIndex >= 10 ? doubleDigitMap[outerIndex] : outerIndex
			}
		};``
	};
};


console.log(convertRgbToHex(15, 240, 140));