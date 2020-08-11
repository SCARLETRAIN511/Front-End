'use strict'
//object practise in javascript

var person = {
    name:'cindy',
    age:'32',
    city:'London'
};

class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    editName(newName){
        this.name = newName;
    }
}

function Student(name,grade,school){
    this.name = name;
    this.grade = grade;
    this.school = school;

    this.returnSchool = function(){
        return this.school;
    }
}


let Tjx = new Student("tjx",12,'Imperial');
console.log(Tjx.grade);
console.log(person.age);