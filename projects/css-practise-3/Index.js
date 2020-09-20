'Use strict'

class People{
    constructor(name,age,sex) {
        let _name = name;
        let _age = age;
        let _sex = sex
    }

    editName(newName){
        this._name = newName;
}

    returnName(){
        return this._name;
    }
}1

let Helen = new People("Helen",19,"female");

Helen.editName("New helen");

console.log(Helen.returnName());
