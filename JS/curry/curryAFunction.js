/*
    1. Curry a Function
Write a function curry(fn) that takes a function fn and returns a curried version of it. For example:

*/

function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			// If all required arguments are provided, call the original function
			return fn(...args)
		} else {
			// Otherwise, return a function that collects the remaining arguments
			return (...nextArgs) => curried(...args, ...nextArgs)
		}
	}
}

// Example Usage
function mul(a, b, c) {
	return a * b * c
}

const curriedAdd = curry(mul)

console.log(curriedAdd(1)(2)(3)) // 6
console.log(curriedAdd(1, 2)(3)) // 6
console.log(curriedAdd(1)(2, 3)) // 6
