// [ ] Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
// - 6 times: Michael Jordan
// - 3 times: Shaquille O'Neal, LeBron James
// - 2 times: <etc>

// Input: List of finals -> array
// Output: List of MVP by times WON -> Array of strings

const fs = require('fs');
const file = fs.readFileSync('../nba_finals.csv').toString().split(/\r?\n/);


console.log(file);

