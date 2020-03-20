'use strict'

class FirstClass{
    constructor(name,age,city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getAge(){
        return this.age;
    }

    SetAge(NewAge){
        this.age = NewAge;
        return this.age;
    }
}

let Employee = {
    name:"Joe",
    age:24,
    display(){
        return this.age;
    },
    place:"Programmer",
    salary:1300,
    setSalary(val){
        this.salary = val;
    },
    showSalary(){
        console.log(this.salary);
    }
};


function callObject1() {
    let People1 = new FirstClass("Tony", 20, "London");

    console.log(People1.name);
    People1.SetAge(19);
    console.log(People1.getAge());
}

function  callObject2() {
    Employee.setSalary(20000);
    Employee.showSalary();
}

callObject2();