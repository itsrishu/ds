// https://leetcode.com/problems/palindrome-linked-list/description/

// 234. Palindrome Linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const isPalindrome = (head) => {
	const s1 = ''
	const s2 = ''
	let node = head

	while (head.next) {
		const s1 = `${s1}${node.val}`
		const s2 = `${node.val}${s2}`

		node = node.next
	}

	return s1 === s2
}
