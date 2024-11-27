/*
    Chain tasks where each task depends on the result of the previous one.
*/

async function promiseWaterfall(tasks, initialValue) {
	return tasks.reduce((prevPromise, crntTask) => {
		return prevPromise.then(crntTask)
	}, Promise.resolve(initialValue))
}
