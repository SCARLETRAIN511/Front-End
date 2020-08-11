'use strict'


//Ways of defining an object
//define a class
class FirstClass{
    constructor(name,age,city,sex) {
        this.name = name;
        this.age = age;
        this.city = city;
        let _sex = sex;
    }

    getAge(){
        return this.age;
    }

    SetAge(NewAge){
        this.age = NewAge;
        return this.age;
    }

    //static method only belongs to the class;
    static displayStudent(student1, student2){
        console.log("We have " + student1.name + " and " + student2.name);
    }
}


//new object
class Product{
    constructor(name,price,amount,madeIn){
        //limit the access of the property.
        //this should not be used here.
        let _name = name;
        let _amount = amount;
        let _price = price;
        let _madeIn = madeIn;

        //hidden property can be called through this way.
        this.getName = function(){
            return _name;
        };
        this.getPrice = function(){
            return _price;
        };
        this.getAmount = function(){
            return _amount;
        };
        this.setAmount = function(num){
            _amount = num;
        };
        this.getMadeIn = function(){
            return _madeIn;
        }
    }
    canSell(num){
        return this.getAmount() >= num;
    }

    sell(num){
        let temp = this.getAmount();
        if(this.canSell(num)){
            this.setAmount(temp-num);
            return this.getAmount();
        }else{
            this.setAmount(temp + (num*2));
            return this.getAmount();
        }
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


//any instance created by function has a hidden property
function Employer(_name,_age,_salary, School){
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
    this.sex = "male";
    let _school = School;

    this.returnSchool = function () {
        return _school;
    };
    this.showName = function () {
        console.log(this.name);
    };
    this.setWage = function (salary) {
        this.salary = salary;
    }
}


//ways to use these objects
function callObject1() {
    let People1 = new FirstClass("Tony", 20, "London");

    console.log(People1.name);
    People1.SetAge(19);
    console.log(People1.getAge());

    let People2 = new FirstClass("Sally",19, "London");

    //call the static method.
    FirstClass.displayStudent(People1,People2);
}


function  callObject2() {
    Employee.setSalary(20000);
    Employee.showSalary();
}


function callObject3() {
    //call the object
    let Wang = new Employer("Wang",22,2000, "Imperial");

    console.log("The salary of the employer is " + Wang.salary);
    Wang.showName();
    Wang.setWage(2000000);
    console.log(Wang.salary)

    //prototype will create a common property for the object.
    Employer.prototype.Company = "Google";
    Employer.prototype.hello = function(){

    };
    console.log(Wang.Company);
    Wang.hello();

    //accessing the hidden property
    console.log(Wang.returnSchool());1
}


function callObject4() {
    let Fruit1 = new Product("Apple",100,120,"China");
    console.log(Fruit1.getAmount());
    console.log(Fruit1.sell(199));
}


callObject4();