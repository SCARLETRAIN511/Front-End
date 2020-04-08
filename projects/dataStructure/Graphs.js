'use strict'

//graph implementation

class Graph{
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList ={};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes ++;
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}


function graphOp() {
    let g1 = new Graph();
    g1.addVertex('0');
    g1.addVertex('1');
    g1.addVertex('2');
    g1.addVertex('3');
    g1.addVertex('4');
    g1.addEdge('1','2');
    g1.addEdge('1','3');
    g1.showConnections();
    console.log(g1.adjacentList);
}

graphOp();