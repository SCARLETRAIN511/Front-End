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
        while (current){
            if (current.data === nodeData){
                if (current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                }else if(current === this.head){
                    this.head = this.head.next;
                    this.head.previous = null;
                }else if(current === this.tail){
                    this.tail = current.previous;
                    this.tail.next = null;
                }else{
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.length --;
            }
            current = current.next;
        }
    }
}

let l1 = new DoubleLinkedList();
l1.addNode(1);
l1.addNode(2);
l1.addNode(3);
l1.addNode(4);
l1.remove(4);
console.log(l1);

//for linkedlist, the insertion,get,search,delete all have the complexity o[n];
