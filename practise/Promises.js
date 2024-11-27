// // retrial of an failed function

// const unreliableFunction = () => {
// 	return new Promise((resolve, reject) => {
// 		const randomSuccess = Math.random() > 0.5 // Randomly succeed or fail
// 		reject(new Error('Random failure'))
// 		// if (randomSuccess) {
// 		// 	resolve('Success!')
// 		// } else {
// 		// 	reject(new Error('Random failure'))
// 		// }
// 	})
// }

// async function retrial(func, retry = 0, limit = 3) {
// 	try {
// 		// Try executing the function
// 		const res = await func()
// 		return res // If successful, return the result
// 	} catch (err) {
// 		if (retry < limit) {
// 			// Increment retry count and retry the function
// 			retry++
// 			console.log(`Attempt ${retry} failed. Retrying...`)
// 			return retrial(func, retry, limit) // Recurse for retry and return the result
// 		} else {
// 			// If retry limit reached, throw the error
// 			throw new Error(
// 				`Function failed after ${limit} retries: ${err.message}`
// 			)
// 		}
// 	}
// }

// retrial(unreliableFunction)
// 	.then((res) => {
// 		console.log(res)
// 	})
// 	.catch((err) => {
// 		console.log(err.message)
// 	})

// Promise Pool

const promisePool = (tasks, poolSize) => {
	let result = []
	const executing = new Set()

	// function to handle task execution

	const runTask = () => {}
}
