const formatUsername = (string) => {
	return string.toLowerCase().replaceAll(" ","-")
}

console.log(formatUsername("My Cool Username"));