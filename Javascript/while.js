'use strict'

function while1(){
    var num = 5;
    while (num<=50){
        if (num % 5 === 0 && num % 3 === 0){
        console.log(num);
        }
        num += 1;
    }
}

function for1(){
    for (let i = 1;i<=10;i++){
        console.log(i);
    }
    var str1 = "String";
    var t = [];
    for (let i = 0;i<str1.length;i++){
        
        t.push(str1[i])
        /*push pop %% unshift shift */
    }
    return t.slice(0,5);
}

function for2(x){
    var sum = 0
    for (let i = 0;i<=10;i++){
        sum += x*i;
    }
    return sum;

}

function replace(str){
    let newStr = str.replace(/-/g,' ');
    return newStr;
}

console.log(for1())
