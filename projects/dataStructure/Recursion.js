'use strict'


function findFactorial(n){
    if (n === 2){
        return 2;
    }
    return n * findFactorial(n-1);
}

console.log(findFactorial(5));