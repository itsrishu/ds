// https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-list&difficulty=EASY

//21. Merge Two Sorted Lists

class ListNode {
	constructor(d) {
		this.val = d
		this.next = null
	}
}

// Brute-Force Approach
const mergeSortedLists = (l1, l2) => {
	const newNode = new ListNode(0)
	let newNodeRef = newNode

	while (l1 !== null && l2 !== null) {
		if (l1 < l2) {
			newNodeRef.next = l1
			newNodeRef = l1.next
		} else {
			newNodeRef.next = l2
			newNodeRef = l2.next
		}

		if (l1 === null) {
			newNodeRef.next = l2
		} else {
			newNodeRef.next = l1
		}
	}
	return newNodeRef.next
}

// Optimised Approach - Recursive

var mergeTwoLists = function (list1, list2) {
	if (list1 === null) return list2
	if (list2 === null) return list1

	if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2)
		return list1
	} else {
		list2.next = mergeTwoLists(list1, list2.next)
		return list2
	}
}
