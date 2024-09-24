//This version should work correctly for limiting requests based on a sliding 1-second window!

class RateLimiter {
	constructor() {
		this.requests = {} // Store client request timestamps
	}

	isAllowed(clientId) {
		const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
		const timeWindowStart = currentTime - 1 // Start of the 1-second time window
		const allRequests = this.requests[clientId] || []

		// Filter requests that fall within the 1-second time window
		const updatedRequests = allRequests.filter((ts) => ts > timeWindowStart)

		// If requests exceed 100 in the last second, deny the request
		if (updatedRequests.length >= 100) {
			return false
		}

		// Add the current request to the log
		updatedRequests.push(currentTime)
		this.requests[clientId] = updatedRequests

		return true
	}
}

// Usage Example
const rateLimiter = new RateLimiter()

app.get('/api/', (req, res) => {
	const clientId = req.headers['x-client-id']

	if (!rateLimiter.isAllowed(clientId)) {
		// Send 429 status if request limit is exceeded
		res.status(429).send('Too many requests')
		return
	}

	// Process the request if allowed
	res.status(200).send('Request allowed')
})
