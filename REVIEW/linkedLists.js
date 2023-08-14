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

    printList() {
        const arr = []
        let curr = this.head
        while(curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }

    insert(index, value) {
        if(index >= this.length) return this.append(value)
        const newNode = new Node(value)
        const prevNode = this.traverseToIndex(index - 1)
        const holdingPointer = prevNode.next

        prevNode.next = newNode
        newNode.next = holdingPointer
        this.length++
    }

    remove(index) {
        const prevNode = this.traverseToIndex(index - 1)
        const holdingPointer = prevNode.next
        prevNode.next = holdingPointer.next
        this.length--
    }

    traverseToIndex(index) {
        let count = 0
        let curr = this.head
        while(count !== index) {
            curr = curr.next
            count++
        }
        return curr
    }
}

const myLinked = new LinkedList(5)
myLinked.append(10)
myLinked.append(16)
myLinked.append(17)
myLinked.prepend(1)
myLinked.insert(2, 8)
myLinked.remove(5)
console.log(myLinked.printList())