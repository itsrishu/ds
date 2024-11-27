/*
    3. Infinite Currying
Write a function sum that allows infinite currying:

*/

function curryingInfinite(a) {
	return (b) => {
		if (b === undefined) return a
		else return curryingInfinite(a + b)
	}
}

console.log(curryingInfinite(1)(2)(3)(4)())
console.log(curryingInfinite(5)(10)(-5)(2)(-2)())
