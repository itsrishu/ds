/*
    Implement a task queue where tasks are added dynamically and processed one by one.
*/

class TaskQueue {
	constructor() {
		this.queue = []
		this.running = false
	}

	async runNext() {
		if (this.running || !this.queue.length) return
		this.running = true
		const task = this.queue.shift()
		await task()
		this.running = false
		this.runNext()
	}

	addTask(task) {
		this.queue.push(task)
		this.runNext()
	}
}
