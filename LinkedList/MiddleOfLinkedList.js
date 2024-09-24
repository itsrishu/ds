const LinkedList = require('./LinkedList')

// Brute-force
function middleOfLinkedList(head) {
	let current = head
	let count = 0

	while (current) {
		count = count + 1
		current = current.next
	}

	current = head
	let index = 0
	while (index < Math.floor(count / 2)) {
		index = index + 1
		current = current.next
	}
	return current ?? null
}

// Optimised approach - fast and slow pointers
function middle(head) {
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}
	return slow.data
}

const linkedListObj = new LinkedList()
linkedListObj.add(2)
linkedListObj.add(4)
linkedListObj.add(6)
linkedListObj.add(10)
linkedListObj.add(17)

console.log(linkedListObj.middleOfTheList())
