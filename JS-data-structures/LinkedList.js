'use strict'
//LinkedList
//Naive Solution
/*
let myLinkedList = {
    head:{
        value:2,
        next:{
            value:5,
            next: {
                value:16,
                next:null
            }
        }
    }
};*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++ ;
        return this;
    }

    printList(){
        const  arr = [];
        let currNode = this.head;
        while (currNode !== null){
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    //use traverse to find the index and the node
    traverseToIndex(index){
        if (index > this.length){
            return undefined
        }
        let counter = 0;
        let currNode = this.head;
        while(counter !== index){
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }

    insert(index,value){
        if (index >= this.length){
            return this.append(value);
        }
        if (index === 0){
            this.prepend(value);
            return this.printList;
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);

        newNode.next = leader.next;
        leader.next = newNode;
        /*const holdingPoint = leader.next
        * leader.next = newNode;
        * newNode.next = holdingPoint;
        * */
        this.length++;
        return this.printList();
    }

    remove(index){
        if (index === 0){
            this.head = this.head.next;
            this.length--;
            return this.printList;
        }
        const leader = this.traverseToIndex(index-1);
        const unWanted = leader.next;
        leader.next = unWanted.next;
        this.length --;
        return this.printList();
    }

    //reverse the linked list
    reverse(){
        if (!this.head.next){
            return this.head;
        }
        let first = this.head;
        let second = first.next;
        while (second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.tail = this.head;
        this.head = first;
        this.tail.next =null;
        return this.printList();
    }
}

//use the linked list
function testLinkedList() {
    let l1 = new LinkedList(1);
    l1.append(2);
    l1.append(333);
    l1.append(2212);
    l1.insert(2, 22);
    l1.insert(53, 12);
    l1.insert(5, 55555);
    console.log(l1.printList());
    console.log(l1);
    console.log(l1.reverse());
    console.log(l1);
}

testLinkedList();


//double linkedList
//双端链表，每个节点有两个指针
class DoubleNode{
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next =null;
    }
}

//double linkedList
class DoubleLinkedList{
    constructor(value) {
        this.head = new DoubleNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new DoubleNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }

    prepend(value){
        const newNode = new DoubleNode(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length ++ ;
        return this;
    }

    printList(){
        const  arr = [];
        let currNode = this.head;
        while (currNode !== null){
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    //use traverse to find the index and the node
    //遍历 ！important
    traverseToIndex(index){
        if (index > this.length){
            //if the length is 0
            return undefined
        }
        let counter = 0;
        let currNode = this.head;
        while(counter !== index){
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }

    insert(index,value){
        if (index >= this.length){
            return this.append(value);
        }
        if (index === 0){
            this.prepend(value);
            return this.printList;
        }
        const newNode = new DoubleNode(value);

        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        /*const holdingPoint = leader.next
        * leader.next = newNode;
        * newNode.next = holdingPoint;
        * */
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList;
        }
        const leader = this.traverseToIndex(index - 1);
        const unWanted = leader.next;
        leader.next = unWanted.next;
        unWanted.next.prev = leader;
        this.length--;
        return this.printList();
    }
}


function testDoubleLinkedList() {
    const dbll1 = new DoubleLinkedList(1);
    dbll1.append(2);
    dbll1.insert(1,10);
    dbll1.remove(1);
    console.log(dbll1.printList());
    console.log(dbll1);
}

