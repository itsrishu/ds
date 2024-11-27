class PriorityQueue {
	constructor() {
		this.queue = []
	}

	// Insert the element in the correct position based on priority
	enqueue(value, priority) {
		const element = { value, priority }
		let added = false
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].priority < priority) {
				this.queue.splice(i, 0, element)
				added = true
				break
			}
		}
		if (!added) {
			this.queue.push(element)
		}
	}

	// Dequeue: Removes and returns the highest-priority element
	dequeue() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty')
		}
		return this.queue.shift()
	}

	isEmpty() {
		return this.queue.length === 0
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty')
		}
		return this.queue[0]
	}

	size() {
		return this.queue.length
	}

	print() {
		if (this.isEmpty()) {
			console.log('Priority Queue is empty')
			return
		}

		this.queue.forEach((element, index) => {
			console.log(
				`${index + 1}. Value: ${element.value}, Priority: ${
					element.priority
				}`
			)
		})
	}
}

const pq = new PriorityQueue()

// Adding elements with priorities
pq.enqueue('Clean the house', 2)
pq.enqueue('Do the dishes', 1)
pq.enqueue('Write code', 3)

pq.print()
