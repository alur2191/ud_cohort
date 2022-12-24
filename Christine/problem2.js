// Write a function that takes an array of strings and sorts it alphabetically by the last letter.

// Inputs: String, String
// Outputs: Int
function compare(a, b) {
	const first = a[a.length-1];
	const second = b[b.length-1];
	if (first < second) {
    return -1;
  }
  if (first > second) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const sortByLastLetter = ['optionB', 'optionA', 'optionC'].sort(compare);
const sortByLastLetter2 = ['optionB', 'optionA', 'optionC'].sort((a,b)=> a[a.length-1].localeCompare(b[b.length-1]))
console.log(sortByLastLetter2);
