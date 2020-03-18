'use strict'

function add(){
    var todos = ["buy"];
    var input = prompt("what would you want to do");

    
    while (input !== "quit"){
        if(input === "list"){
            todos.forEach(function(each,index){
                
                alert(index + ":" + each);
            })
        }
        else if (input == "New"){
            var Newtodo = prompt("Entern the action");
            todos.push(Newtodo); 
        }
        else if (input === "delete"){
            var index = prompt("Enter the index of thing to remove");
            todos.splice(index,1);
        };

        var input = prompt("what would you want to do");//ask for the input again.
    }

    console.log("Ok u r done");
}

add()