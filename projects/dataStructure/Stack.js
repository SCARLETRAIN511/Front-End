//use linkedList to implement stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPoint = this.top;
            this.top = newNode;
            this.top.next = holdingPoint;
        }
        this.length ++;
        return this;
    }

    pop(){
        if (!this.top){
            return null;
        }
        if (this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPoint = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPoint;
    }
}


let s1 = new Stack();
s1.push("A");
s1.push("B");
console.log(s1);
console.log(s1.peek());
s1.pop();
console.log(s1);