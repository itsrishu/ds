const LinkedList = require('./LinkedList')

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)

list.head.next.next.next.next = list.head.next

console.log(list.hasCycleOptimised())
