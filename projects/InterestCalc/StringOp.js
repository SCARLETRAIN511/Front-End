'use strict'

function test1(){
    let str1 = "Str is the str";
    let a1 = str1.split(" ");
    console.log(a1);
    console.log(str1.slice(0,3));
}

test1();

function test2() {
    let a1 = [1, 2, 3];
    a1[1000] = 19;
    console.log(a1.length);
}

test2();