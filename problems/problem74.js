
// # Name matching

// We will write a function, nameMatch, which takes in a list of "known aliases" and a target name. The
// function will return true if the target name is a match for any of the known aliases and otherwise
// will return false. A target name matches an alias if:

// ## Part 1: Exact match

// A target name matches a known alias if they are exactly the same, e.g.

// ```js
// > console.assert(nameMatch(["John  Ronald Smith", "Bill Lee"], "John Ronald Smith"))
// > console.assert(!nameMatch(["Bill Cooper"], "James Cooper"))
// ```

// ## Part 2: Missing target middle name

// A target name matches a known alias if the target name is missing a middle name even when the alias
// has a middle name, e.g.

// ```js
// > console.assert(nameMatch(["John Ronald Smith"], "John Smith"))
// ```

// ## Part 3: Missing alias middle name

// A target name matches a known alias if the alias name is missing a middle name even when the target
// has a middle name, e.g.

// ```js
// > console.assert(nameMatch(["John Smith"], "John Ronald Smith"))
// ```

// ## Part 4: Middle initials

// A target name matches a known alias even if one of them only has a middle initial, e.g.

// ```js
// > console.assert(nameMatch(["John R Smith"], "John Ronald Smith"))
// > console.assert(nameMatch(["John Ronald Smith"], "John R Smith"))
// ```

// ## Part 5: Transpose First/Middle names

// A target name matches a known alias according to _all_ of the above rules even if the target name
// has its first/middle names transposed, e.g.

// ```js
// > console.assert(nameMatch(["John Ronald Smith"], "Ronald John Smith"))  // Part 1 transposed
// > console.assert(nameMatch(["John Ronald Smith"], "Ronald Smith"))       // Part 2 transposed
// > console.assert(nameMatch(["John Smith"], "Ronald John Smith"))         // Part 3 transposed
// > console.assert(nameMatch(["John R Smith"], "Ronald John Smith"))       // Part 4 transposed
// > console.assert(nameMatch(["John Ronald Smith"], "Ronald J Smith"))     // Part 4 transposed
// > console.assert(nameMatch(["John R Smith"], "Ronald J Smith"))          // Part 4 transposed
// ```

// */

// input: list of aliases -> array
// output: is there a match of aliases to the target -> boolean

function nameMatch(aliaseNameStrings, targetNameString) {
	// Pseudo code.
	// Separate out parsing from matching.
	function parseName(nameString) {
		var parts = nameString.split(' ');
		if (parts.length == 3) {
			return {first: parts[0], middle: parts[1], last: parts[2]};
		}
		return {first: parts[0], middle: null, last: parts[1]};
	}

	var aliases = aliaseNameStrings.map(AparseName);
	var target = parseName(targetNameString);

	// Exacty match of target and given alias first name, middle name, and last name
	function exactMatch(a, b) {
		return a.first == b.first && a.middle == b.middle && a.last == b.last;
	}

	// Match of target and given alias first name, and last name, but missing middle name
	function missingMiddleName(a,b) {
		return !a.middle || !b.middle && a.first == b.first && a.last == b.last;
	}

	// Match of target and given alias first name, and last name, and middle name initials
	function middleInitial(a,b) {
		return a.first == b.first && a.middle[0] == b.middle[0] && a.last == b.last;
	}

	function transpose(a,b) {
		// check if last names match
		if(a.last != b.last) return false
		// if target has middlename, check if middle name initials match last name initials
		if (b.middle) {
			if(a.first[0] == b.middle[0]
			&& a.middle[0] == b.first[0]){
				return true
			}
		}

		if(a.middle == b.first) return true
	}

	for (var alias of aliases) {
		// ## Part 1: Exact match
		if (exactMatch(alias, target)) {
			return true;
		}
		
		// ## Part 2 & 3: Missing target middle name
		if (missingMiddleName(alias, target)) {
			return true;
		}
		
		// ## Part 4: Middle initials
		if (middleInitial(alias, target)) {
			return true;
		}

		// ## Part 5: Transpose First/Middle names
		if (transpose(alias, target)) {
			return true
		}
	}
}

function runTest(known_aliases, target, expected) {
	let got = nameMatch(known_aliases, target);
	console.log(`known_aliases: ${known_aliases}`);
	console.log(`target: ${target}`);
	console.log(`expected: ${expected} got: ${got}`);
	console.log(expected == got ? "PASS" : "FAIL");
	console.log("");
}

// Custom
console.log("Custom")
runTest(["John Ronald Smith"], "John R Smith", true);

// Part 1
console.log("Part 1");
runTest(["John Ronald Smith"], "John Ronald Smith", true);
runTest(["John Ronald Smith"], "John Rex Smith", false);

// Part 2
console.log("Part 2");
runTest(["John Ronald Smith"], "John Smith", true);

// Part 3
console.log("Part 3");
runTest(["Smith John"], "John Ronald Smith", true);

// // Part 4
console.log("Part 4");
runTest(["John R Smith"], "John Ronald Smith", true);
runTest(["John Ronald Smith"], "John R Smith", true);

// Part 5
console.log("Part 5");
runTest(["John Ronald Smith"], "Ronald John Smith", true)
runTest(["John Ronald Smith"], "Ronald Smith", true)
runTest(["John Smith"], "Ronald John Smith", true)
runTest(["John R Smith"], "Ronald John Smith", true)
runTest(["John Ronald Smith"], "Ronald J Smith", true)
runTest(["John R Smith"], "Ronald J Smith", true)