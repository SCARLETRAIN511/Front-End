class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    addNode(data){
        const node = new Node(data);
        if (!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++;
    }

    insertAfter(data,toNodeData){
        let current = this.head;
        while (current){
            if (current.data === toNodeData){
                const node = new Node(data);
                if (current === this.tail){
                    this.addNode(data)
                }else{
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next= node;
                    this.length ++;
                }
            }
            current = current.next;
        }
    }

    remove(nodeData){
        let current = this.head;
    }
}