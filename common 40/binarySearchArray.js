function binarySearch(arr, target) {
	const left = 0
	const right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)

		if (arr[mid] === target) {
			return mid
		}

		if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}