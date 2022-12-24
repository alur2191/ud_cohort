/******************
 * Name Matching
 *
 *   	One of the most important aspects of our work is accurately matching records
 * 		to candidates. One of the ways that we do this is by comparing the name on a given record
 * 		to a list of known aliases for the candidate. In this exercise, we will implement a
 * 		`nameMatch` method that accepts the list of known aliases as well as the name returned
 * 		on a record. It should return true if the name matches any of the aliases and false otherwise.
 *
 * The nameMatch method will be required to pass the following tests:
 *
 * 1. Exact match
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Al Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Al Capone")               => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => false
 *
 *
 * 2. Middle name missing (on alias)
 *
 *   knownAliases = ["Alphonse Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alexander Capone")        => false
 *
 *
 * 3. Middle name missing (on record name)
 *
 *   knownAliases = ["Alphonse Gabriel Capone"]
 *   nameMatch(knownAliases, "Alphonse Capone")         => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => false
 *   nameMatch(knownAliases, "Alexander Capone")        => false
 *
 *
 * 4. More middle name tests
 *    These serve as a sanity check of your implementation of cases 2 and 3
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alphonse Edward Capone")  => false
 *
 *
 * 5. Middle initial matches middle name
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"]
 *   nameMatch(knownAliases, "Alphonse G Capone")       => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alphonse E Capone")       => false
 *   nameMatch(knownAliases, "Alphonse Edward Capone")  => false
 *   nameMatch(knownAliases, "Alphonse Gregory Capone") => false
 *
 *
 * Bonus: Transposition
 *
 * Transposition (swapping) of the first name and middle name is relatively common.
 * In order to accurately match the name returned from a record we should take this
 * into account.
 *
 * All of the test cases implemented previously also apply to the transposed name.
 *
 *
 * 6. First name and middle name can be transposed
 *
 *   "Gabriel Alphonse Capone" is a valid transposition of "Alphonse Gabriel Capone"
 *
 *   knownAliases = ["Alphonse Gabriel Capone"]
 *   nameMatch(knownAliases, "Gabriel Alphonse Capone") => true
 *   nameMatch(knownAliases, "Gabriel A Capone")        => true
 *   nameMatch(knownAliases, "Gabriel Capone")          => true
 *   nameMatch(knownAliases, "Gabriel Francis Capone")  => false
 *
 *
 * 7. Last name cannot be transposed
 *
 *   "Alphonse Capone Gabriel" is NOT a valid transposition of "Alphonse Gabriel Capone"
 *   "Capone Alphonse Gabriel" is NOT a valid transposition of "Alphonse Gabriel Capone"
 *
 *   knownAliases = ["Alphonse Gabriel Capone"]
 *   nameMatch(knownAliases, "Alphonse Capone Gabriel") => false
 *   nameMatch(knownAliases, "Capone Alphonse Gabriel") => false
 *   nameMatch(knownAliases, "Capone Gabriel")          => false
 */