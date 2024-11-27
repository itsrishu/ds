/*
    Write a function promisePool(tasks, poolSize) that takes:
    An array of async functions (tasks).
    A maximum number of concurrently executing tasks (poolSize).
    The function should execute tasks in parallel but with a limit of poolSize at a time. 
    It should return a promise that resolves when all tasks are completed.
*/

var promisePool = async function (functions, n) {
	return new Promise((resolve) => {
		let inProgress = 0,
			index = 0

		function helper() {
			// base case
			if (index === functions.length && inProgress === 0) {
				resolve()
			}

			while (index < functions.length && inProgress < n) {
				functions[index++]().then(() => {
					inProgress--
					helper()
				})
				inProgress++
			}
		}
		helper()
	})
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
const delay = (ms, value) => () =>
	new Promise((res) => setTimeout(() => res(value), ms))

const tasks = [
	delay(1000, 'Task 1'),
	delay(500, 'Task 2'),
	delay(300, 'Task 3'),
	delay(700, 'Task 4'),
]

promisePool(tasks, 2).then((results) => console.log(results))
// Expected Output: ["Task 1", "Task 2", "Task 3", "Task 4"]
// Tasks 1 and 2 start first, followed by 3 and 4 as tasks finish.
