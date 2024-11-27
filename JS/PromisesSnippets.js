const p1 = Promise.resolve(1)
const p2 = Promise.reject('Error!')
const p3 = Promise.resolve(3)
Promise.all([p1, p2, p3])
	.then((result) => console.log('All:', result))
	.catch((error) => console.log('Caught:', error))
Promise.allSettled([p1, p2, p3]).then((result) =>
	console.log('All Settled:', result)
)
const p11 = newPromise((resolve, reject) => setTimeout(reject, 100, 'Error 1'))
const p22 = newPromise((resolve) => setTimeout(resolve, 50, 'Success 1'))
const p33 = newPromise((resolve) => setTimeout(resolve, 150, 'Success 2'))

Promise.race([p11, p22, p33])
	.then((result) => console.log('Race:', result))
	.catch((error) => console.log('Race Error:', error))

// Race: success 1 Promise.any([p1, p2, p3]) .then(result =>console.log('Any:', result)) .catch(error =>console.log('Any Error:', error));

// Any: success 1
const p111 = Promise.reject('Error 1')
const p222 = Promise.reject('Error 2')
const p333 = Promise.reject('Error 3')
Promise.any([p111, p222, p333])
	.then((result) => console.log('Any Success:', result))
	.catch((error) => console.log('Any Error:', error))
// Any error, [error,error,error]

const obj = { a: 1 }
Object.defineProperty(obj, 'b', {
	value: 2,
	writable: false,
	enumerable: false,
	configurable: false,
})
obj.b = 3 // can't be changes as writable is false
console.log(obj.b)
console.log(Object.keys(obj)) // will not appear in object.keys as enumerable is false
delete obj.b // can't be deleted as configurable is false
console.log(obj.b)

// 2 // ['a'] // 2
