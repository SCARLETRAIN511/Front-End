//implementation of graph using javascript

class Graph{
    constructor() {
        this.numberOfVertices = 0;
        this.adjList = new Map();
    }

    addVertex(vertex){
        this.numberOfVertices ++;
        this.adjList.set(vertex,[]);
    }

    addEdge(v1,v2){
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    //print the graph
    print(){
        const keys = this.adjList.keys();
        //find all the keys
        for (let i of keys){
            const values = this.adjList.get(i);
            let value = "";
            //add all the adjacent nodes of the same keys
            for (let j of values){
                value += j + " ";
            }
            console.log(`${i} => ${value}`);
        }
    }
}


function operation1(){
    let g1 = new Graph();
    g1.addVertex(1);
    g1.addVertex(3);
    g1.addVertex(4);
    g1.addEdge(1,3);
    g1.addEdge(3,4);
    g1.print()
}

operation1();