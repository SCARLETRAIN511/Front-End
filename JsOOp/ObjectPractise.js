'use strict'

function part1() {
    let ob1 ={
        name:"T",
        attack:"Physical",
        hp:100,
        Helen:{
            name:"helen",
            age:21,
            city:"london"
        }
    };
    ob1.hp = 1000;//edit the property of the object
    console.log(ob1.hp);
    console.log(ob1.Helen.age);

}

part1();