//javascript

class Queue{
    constructor() {
        this.queue = [];
    }

    enqueue(data){
        this.queue.push(data);
    }

    dequeue(){
        return this.queue.shift();
    }

    printQueue(){
        let str = "";
        for (let i = 0;i<this.queue.length;i++){
            str += this.queue[i] + "\n";
        }
        return str;
    }
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
console.log(q1.printQueue());