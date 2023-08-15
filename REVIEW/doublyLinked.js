class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinked {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        this.printList()
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        this.printList()
    }

    insert(index, value) {
        let newNode = new Node(value)
        let lead = this.traverseToIndex(index - 1)
        let hold = lead.next
        lead.next = newNode
        newNode.prev = lead
        newNode.next = hold
        this.length++
        this.printList()
    }

    remove(index) {
        let lead = this.traverseToIndex(index - 1)
        let hold = lead.next
        let holdForward = hold.next
        lead.next = hold.next
        holdForward.prev = lead
        this.length--
        this.printList()
    }

    traverseToIndex(index) {
        let count = 0
        let curr = this.head
        while (count !== index) {
            curr = curr.next
            count++
        }
        return curr
    }

    printList() {
        let arr = []
        let curr = this.head
        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        console.log(arr)
    }
}

let myDoubly = new DoublyLinked(5)
myDoubly.append(10)
myDoubly.append(20)
myDoubly.prepend(0)
myDoubly.prepend(-5)
myDoubly.insert(4, 15)
myDoubly.remove(3)