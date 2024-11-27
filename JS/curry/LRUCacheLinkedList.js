class Node {
	constructor(key, value) {
		this.key = key
		this.value = value
		this.prev = null
		this.next = null
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.map = new Map()
		this.head = new Node(0, 0)
		this.tail = new Node(0, 0)
		this.head.next = this.tails
		this.tail.prev = this.head
	}

	// helper to remove a node from the linked list
	_remove(node) {
		const prev = node.prev
		const next = node.next
		prev.next = next
		next.prev = prev
	}

	// helper to add a node right after the head
	_add(node) {
		const next = this.head.next
		this.head.next = node
		node.prev = this.head
		node.next = next
		next.prev = node
	}

	get(key) {
		if (this.map.has(key)) {
			const node = this.map.get(key)
			this._remove(node)
			this.add(node)
			return node.value
		}
		return -1
	}

	put(key, value) {
		if (this.map.has(key)) {
			this._remove(this.map.has(key))
		}
		const node = new Node(key, value)
		this._add(node)
		this.map.set(key, node)

		if (this.map.size() > this.capacity) {
			const lru = this.tail.prev
			this._remove(lru)
			this.map.delete(lru.key)
		}
	}
}

const lru = new LRUCache(3)
lru.put(1, 1) // Cache: {1: 1}
lru.put(2, 2) // Cache: {1: 1, 2: 2}
lru.put(3, 3) // Cache: {1: 1, 2: 2, 3: 3}
console.log(lru.get(1)) // Returns 1, Cache: {2: 2, 3: 3, 1: 1}
lru.put(4, 4) // Cache exceeds capacity, removes 2. Cache: {3: 3, 1: 1, 4: 4}
console.log(lru.get(2)) // Returns -1 (not found)
console.log(lru.get(3)) // Returns 3, Cache: {1: 1, 4: 4, 3: 3}
