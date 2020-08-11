'use strict'

const nemo = ['nemo'];
const large = new Array(10).fill('nemo');
function findNemo(array){
    let t0 = 10;
    for (let i=0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found Nemo');
        }
    }
    let t1 = 20;
    console.log('call to find nemo took' + (t1-t0) + 'ms');
}

function Test1(){
    var A1 = "Javascript";
    console.log(A1[0]);
    console.log(A1[9]);
    console.log(A1.length);

    let k;
    k=20
    console.log(k);

}

function calculater(year){
    alert("this is roughly " + year*365 + "days");
}

function printReverse(arr){
    var arr2 = []
    for (let i = arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
        console.log(arr[i]);
    }
    return arr2
}

function isUniform(arr){
    var first = arr[0];
    for (let i = 0;i <arr.length;i++){
        if (arr[i] !== first){
            return false;
        }
    }
    return true
}

function max(arr){
    var max = arr[0];
    for (let i = 0;i<arr.length;i++){
        if (arr[i] >= max){
            max = arr[i];
        }
    }
    return max
}

console.log(printReverse([1,2,3]));
console.log(isUniform([1,1,1]));
console.log(max([1,2,3,4,5,121,2]));