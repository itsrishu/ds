const EventLogger = {
	// Initialize the start time
	initializeStartTime: function () {
		// Store the current time in milliseconds as the start time
		this.startTime = Date.now()
	},

	// Set the fetch response delay
	setFetchResponseDelay: function (timeout = 0) {
		// Set the delay for the fetch response
		this.fetchResponseDelay = timeout
	},

	// Reset the fetch response delay to the default (0 ms)
	resetFetchResponseDelay: function () {
		// Reset delay to 0 (no delay)
		this.fetchResponseDelay = 0
	},

	// Send a request
	sendRequest: function (body) {
		// Log the time taken since the start time
		const currentTime = Date.now()
		const timeElapsed = currentTime - (this.startTime || currentTime) // Avoid NaN if startTime is not initialized

		console.log(`Time since start: ${timeElapsed} ms`)

		// Simulate a fetch request with a delay
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(`Request sent with body:`, body)
				resolve({ status: 200, message: 'Request successful' })
			}, this.fetchResponseDelay || 0) // Delay by the fetchResponseDelay, or 0 if not set
		})
	},
}

// Do not edit below this line
export default EventLogger

EventLogger.initializeStartTime() // Initializes start time
EventLogger.setFetchResponseDelay(2000) // Set a delay of 2000 ms for the fetch response

EventLogger.sendRequest({ message: 'Hello' }).then((response) => {
	console.log(response) // Logs the simulated response after 2 seconds
})

EventLogger.resetFetchResponseDelay() // Resets the delay to 0 ms
EventLogger.sendRequest({ message: 'World' }).then((response) => {
	console.log(response) // Logs the simulated response immediately
})
