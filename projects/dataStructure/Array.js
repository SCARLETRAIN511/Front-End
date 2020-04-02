'use strict'

function arrayOp1() {
    const strings = ['a', 'b', 'c', 'd', 'e'];
    strings.push(3);
    console.log(strings);
    strings.unshift("l");
    strings.splice(2, 2, "k");//if deleteCount is zero is the same as insert
    console.log(strings);
}


//implementing an array
class MyArray {
    constructor() {
        this.length = 0;
        this.data ={};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        //index is the item
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index){
       for (let i = index;i<this.length;i++){
           this.data[i] = this.data[i+1];
       }
       delete this.data[this.length-1];
       this.length--;
    }
}


const newArray = new MyArray();
console.log(newArray);
newArray.push("first");
newArray.push("Second");
newArray.push("hhhh");
console.log(newArray.delete(1));
console.log(newArray.data);

