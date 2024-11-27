// https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=linked-list&difficulty=EASY
// 206. Reverse Linked List

// Iterative way
function reverseLinkedListIterativeWay(head) {
	let prev = null
	let current = head

	while (current != null) {
		let nxt = current.next
		current.next = prev
		prev = current
		current = nxt
	}
	return prev
}

// Recursive way
function reverseLinkedListRecursiveiveWay(node) {
	if (node === null || node.next === null) {
		return node
	}

	const newHead = reverseLinkedListRecursiveiveWay(node.next)
	const nodeNext = node.next
	nodeNext.next = head
	head.next = null
	return newHead
}

/*

Differences and Trade-Offs:
Space Efficiency:

Iterative: O(1) space complexity due to no additional function call stack.
Recursive: O(n) space complexity due to the call stack.
Complexity:

Iterative: Typically easier to understand and less prone to stack overflow issues with large lists.
Recursive: Can be more elegant and concise, but may lead to stack overflow for very large lists.
Implementation:

Iterative: Uses a loop and fixed extra space. Commonly preferred in practice for its space efficiency.
Recursive: Uses function calls and the call stack. Can be more intuitive but less space-efficient.

*/

const linkedList = new LinkedList()
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
linkedList.addFirst(6)
