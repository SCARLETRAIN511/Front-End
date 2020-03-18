'use strict'

function test1(){
    let arr = [1,2,3,4,5];
    let max = arr[0];
    for (let i = 0;i<arr.length;i++){
        if (max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(test1())