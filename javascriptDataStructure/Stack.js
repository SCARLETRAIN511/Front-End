class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        return this.stack.pop();
    }

    printStack(){
        let str = "";
        for (let i = 0;i<this.stack.length;i++){
            str += this.stack[i] + "\n";
        }
        return str;
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.stack);
console.log((myStack.printStack()));