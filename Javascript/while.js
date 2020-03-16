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
    for (let i = 0;i<str1.length;i++){
        var t = [];
        t[i] = str1[i];
    }
    console.log(t[1])
}

function main(){
    for1()
}

main()