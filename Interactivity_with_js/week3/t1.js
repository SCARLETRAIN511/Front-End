var fruits=["Banana","Orange","Apple","Mango"];
function loadFruits(){
    document.getElementById("fruits").innerHTML=fruits;
}

function myfunction(){
    var fruit=prompt("What is your favourite fruit?");
    fruits[fruits.length]=fruit;
    document.getElementById("fruits").innerHTML=fruits;
}
function sum_num(num){
    var total=0
    for(i=0; i<num.length;i++){
        total=total+num[i];
    }
    return total;
}

function ask_name(){
    var name=prompt("what is your name");
    if (name!='LLJ'){
        document.write("hello"+name);
    }
    else
        document.write("fuck you"+name);
}