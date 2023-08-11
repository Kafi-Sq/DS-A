let linkedList = {
    head: {
        val: 10, 
        next: {
            val: 5,
            next: {
                val: 16,
                next: null
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
}

const myLinked = new LinkedList(5)
myLinked.append(10)
myLinked.append(16)
myLinked.append(17)
myLinked.prepend(3)
myLinked.prepend(1)
console.log(myLinked)