// write sequences
// three parameters - low, mid, max length
// return array of array -> must have at least 1 element. at Most max length 
// Every int greater than or equal to low, strictly less than high
// Int must be in asc

// low of 1
// high of 4
// length of 2

// input: 1,4,2
// output:
// [1] [2] [3]
// [1 2] [1 3] [2 3]

// low of 1
// high of 4
// length of 3

// input: 1,4,2
// output:
// [1] [2] [3]
// [1 2] [1 3] [1 2 3] [2 3]



const generate = (low, high, length) => {
	// looping from low to high with index i
		// if i + 1 == truthy
			// generateNumbers(i, length)
			// inner loop that start looping from i + 1


}

const generateNumbers = () => {
	
}

generate(1,4,2)

function generateThree(low, high) {
  for (let i = low; i < high; i++) {
    for (let j = i + 1; j < high; j++) {
      for (let k = j + 1; k < high; k++) {
        console.log([i,j,k]);
      }
    }
  }
}


generateThree(1,5);

generateExactLength()

[1, 2, 3, 4, 5, 6]

length: 3

[1] + ([2,3,4,5,6] 2,7 length: 2)
[2] + [3,4,5,6] length: 2
[3] + [4,5,6] length: 2
[4] = [5,6] length: 2

[1] ++ generateExactLength(2, 7, 2)
[2] ++ generateExactLength(3, 7, 2)

generateExactLength(2, 7, 2)

[2,3,4,5,6]
[i] + generateExactLength(i+1,7,1)



generate(1,4,X);
/*

                 []R
     [1]A         [2]B            [3]C
    [2]D [3]E      [3]F          
  [3]G

G = {
  R: [A, B, C]
  A: [D, E]
  B: [F]
  C: []
  D: [G]
  E: []
  F: []
  G: []
}


def neighbors(graph, node):
  return graph[node]
  
neighbors(G, R) -> [A, B, C]

def neighbors(low, high, maxLength, node):
  # node = [1,3]
  if len(node) == maxLength:
    return []
  else:
    min = node[-1] + 1
    max = high
    return [min...max-1]
*/

// [A, B, C, D, E]
// [T/F, T/F, T/F, T/F, T/F]


// Backtracking - is a more optimal