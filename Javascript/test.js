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
findNemo(large);

console.log(typeof NaN)
