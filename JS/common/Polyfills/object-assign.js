function customAssign(target, ...sources) {
	if (target === null) {
		throw new Error('Invalid arguments')
	}

	let to = Object(target)

	sources.forEach((source) => {
		if (source !== null) {
			for (let key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					to[key] = source[key]
				}
			}
		}
	})
	return to
}

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

console.log(customAssign(target, source))
