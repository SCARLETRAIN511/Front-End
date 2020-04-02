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

function reverse(str) {
    let strNew = [];
    if (!str || str.length<2){
        return str;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            strNew[str.length - 1 - i] = str[i];
        }
        //merge the string array;
        return strNew.join("");
    }
}


//use es6 feature
const reverse2 = str => str.split('').reverse().join("");

console.log(reverse("HHeloo"));
console.log(reverse2("Helllo"));


//Merge Sorted Arrays
function merge(arr1,arr2) {
    const merged = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    if (arr1.length === 0){
        return arr2;
    }
    if (arr2.length === 0){
        return arr1;
    }
    while(arr2Item || arr1Item){
        if (!arr2Item || arr1Item<arr2Item){
            merged.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }else {
            merged.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return merged;
}

function merge2(arr1,arr2){
    let merged = [];
    while (arr1[0] && arr2[0]){
        if (arr1[0] < arr2[0]){
            merged.push(arr1.shift());
        }else {
            merged.push(arr2.shift());
        }
    }
    if (arr1[0] !== undefined){
        return merged.concat(arr1);
    }
    else{
        return merged.concat(arr2);
    }
}

console.log(merge([1,2,3],[2,3,5]));
console.log(merge2([1,2,3,11,66],[2,3,5,7]));