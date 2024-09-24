class EventEmitter {
	constructor() {
		// Initialize an object to hold event names and their corresponding callbacks
		this.events = {}
	}

	// Method for registering event listeners
	on(name, callback) {
		// If the event doesn't exist, initialize it as an empty array
		if (!this.events[name]) {
			this.events[name] = []
		}
		// Add the callback to the list of event listeners for this event
		this.events[name].push(callback)
	}

	// Method for emitting events and invoking registered callbacks
	emit(name, ...args) {
		// If the event exists, loop through the listeners and call each with the provided arguments
		if (this.events[name]) {
			this.events[name].forEach((callback) => {
				callback(...args)
			})
		}
	}
}

// Do not edit below this line
export default EventEmitter

const emitter = new EventEmitter()

emitter.on('greet', (name) => {
	console.log(`Hello, ${name}!`)
})

emitter.emit('greet', 'Alice') // Output: Hello, Alice!
emitter.emit('greet', 'Bob') // Output: Hello, Bob!
