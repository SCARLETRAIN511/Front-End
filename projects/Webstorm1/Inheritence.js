'use strict'

function Shape(shapeName,side){
    this.shapeName = shapeName;
    this.side = side;
}

Shape.prototype.equalsides = true;


function Triangle(shapeName,shapeSides,length,width) {
    Shape.call(this,shapeName,shapeSides);

    this.length = length;
    this.width = width;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function () {
    return this.length * this.width/2;
};

console.log(Triangle.prototype);

let t1 = new Triangle("Tri",3,4,4);

console.log(t1.getArea());


//'Inheritance in ES6'
/*---------------------------------------------------------------------------------------*/

class People{
    constructor(name,age,sex,city) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.city = city;
    }

    getName(){
        return this.name;
    }

    editName(newName){
        this.name = newName;
    }

    move(newCity){
        this.city = newCity;
    }
}

class Student extends People{
    constructor(name,age,sex,city,school) {
        //use of super function
        super(name,age,sex,city);
        this.school = school;
    }

    getName() {
        //overwrite the method of the class
        super.getName();
        return this.school;
    }
}

let Helen = new Student("Helen","19","Female","London","Imperial");

console.log(Helen.getName());


//'Practise'
//--------------------------------------------------------------------------------------------------
// Base Class

class Vehicle {
    constructor(){
        let _speed = "100";
        let _model = "Tesla";
        this.getModel = function(){
            return _model;
        }
        this.getSpeed = function(){
            return _speed;
        }
    }
}

// Derived Class
class Car extends Vehicle {
    constructor(){
        super();
        this.name = "";
    }

    setDetails(name) {
        this.name = name;
    }

    getDetails(carName){
        let details = carName + ", " + this.getModel() + ", " + this.getSpeed();
        return details;
    }
}

let Bmw = new Car();
Bmw.setDetails("Bmw");
console.log(Bmw.getDetails("X5"));