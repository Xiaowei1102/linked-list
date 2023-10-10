class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
        this.size++;
        
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    size() {
        return this.size;
    }
    head() {
        return this.head;
    }
    tail() {
        let node = this.head;
        while (node.next != null) {
            node = node.next;
        }
        return node;
    }
    at(index) {
        let node = this.head;
        while (index > 0) {
            node = node.next;
            index--;
        }
        return node;
    }
    pop() {
        //no element
        if (this.head === null) {
            return;
        }
        //only one element
        if (this.head.next === null) {
            this.head = null;
        }
        // two or more element
        let cur = this.head.next;
        let pre = this.head;
        while (cur.next != null) {
            cur = cur.next;
            pre = pre.next;
        }
        pre.next = null;
        this.size--;
    }
    contains(value) {
        let node = this.head;
        while (node != null) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
    find(value) {
        if (this.head === null) return null;
        let node = this.head;
        let index = 0;
        while (node != null) {
            if (node.value === value) {
                return index;
            }
            node = node.next;
            index++;
        }
        return null;
    }
    toString() {
        if (this.head === null) return "null";
        let node = this.head;
        let str = `(${this.head.value}) -> `;
        while (node.next != null) {
            node = node.next;
            str += `(${node.value}) -> `;
        }
        return str + "null";
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(3);
list.append(4);

console.log(list.toString());
