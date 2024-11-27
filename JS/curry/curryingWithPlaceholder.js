function curry(fn) {
	return function curried(...args) {
		const relevantArgs = args.slice(0, fn.length)
		const hasPlaceholder = relevantArgs.includes(curry.placeholder)

		if (relevantArgs.length >= fn.length && !hasPlaceholder) {
			return fn.apply(this, relevantArgs)
		}

		return (...nextArgs) => {
			return curried.apply(this, combineArgs(relevantArgs, nextArgs))
		}
	}
}

function combineArgs(args = [], nextArgs = []) {
	const trueArgs = args.reduce((acc, arg) => {
		const nextArg =
			arg === curry.placeholder && nextArgs.length
				? nextArgs.shift()
				: arg
		return [...acc, nextArg]
	}, [])

	return [...trueArgs, ...nextArgs]
}

curry.placeholder = Symbol()

const join = (a, b, c) => {
	return a * b * c //`${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
