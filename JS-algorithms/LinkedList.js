class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data){
        const node = new Node(data);
        if (!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
    }

    insertAfter(data,toNodeData){
        let current = this.head;
        while (current){
            if (current.data === toNodeData){
                const node = new Node(data);
                if (current === this.tail){
                    this.tail.next = node;
                    this.tail = node;
                }
                else{
                    node.next = current.next;
                    current.next = node;
                    break;
                }
            }
            current = current.next;
        }
    }

    remove(nodeData) {
        let previous = this.head;
        let current = this.head;
        while (current){
            if (current.data === nodeData){
                if (current === this.head){
                    this.head = current.next;
                }
                if (current === this.tail){
                    this.tail = previous;
                }
                previous.next = current.next
            }
            previous = current;
            current = current.next;
        }
    }
}

let l1 = new SinglyLinkedList();
l1.addNode(1);
l1.addNode(2);
l1.addNode(3)
console.log(l1);
l1.remove(3);
console.log(l1);