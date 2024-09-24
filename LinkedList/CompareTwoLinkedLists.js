//Compare two linked lists

function compareLists(l1, l2) {
	let h1 = l1
	let h2 = l2

	while (h1 && h2) {
		if (h1.data !== h2.data) {
			return false
		}
		h1 = h1.next
		h2 = h2.next
	}
	return h1 === null && h2 === null
}
