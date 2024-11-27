/*
    Create a curried function multiply such that:
*/

function curriedMultiply(a) {
	return (b) => {
		if (b === undefined) return a // Termination condition
		return curriedMultiply(a * b) // Accumulate the product
	}
}

// Example Usage
console.log(curriedMultiply(2)(3)(4)()) // 24
console.log(curriedMultiply(5)(10)()) // 50
console.log(curriedMultiply(7)()) // 7
