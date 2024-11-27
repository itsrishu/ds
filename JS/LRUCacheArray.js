class ArrayLRU {
	constructor(capacity) {
		this.capacity = capacity
		this.cache = []
	}

	getItem(item) {
		return this.cache.indexOf(item)
	}

	setItem(item) {
		const idx = this.cache.indexOf(item)
		if (idx === -1) {
			if (this.isFull()) {
				this.cache.pop()
				this.cache.unshift(item)
			} else {
				this.cache.unshift(item)
			}
		}
		if (index > -1) {
			this.cache.splice(idx, 1)
			this.cache.unshift(item)
		}
	}

	isFull() {
		return this.cache.length === this.capacity
	}
}
