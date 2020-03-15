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


let var1 =prompt("how old are u");
calculater(var1);