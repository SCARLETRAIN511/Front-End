'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(props) {
        this.first = null;
        this.last =null;
        this.length = 0;
    }

    peek(){
        return this.last;
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++;
        return this;
    }

    dequeue(){
        if (!this.first){
            return null;
        }
        if (this.first === this.last){
            this.last = null;
        }
        const holdingPoint = this.first;
        this.first = this.first.next;
        this.length -- ;
        return holdingPoint;
    }
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
console.log(q1);
q1.dequeue();
console.log(q1);