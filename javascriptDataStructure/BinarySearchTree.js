//javascript

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    addNode(data){
        const newNode = new TreeNode(data);
        if (!this.root){
            this.root = newNode;
        }
        else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if (newNode.data <= node.data){
            if (!node.left){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(nodeData){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node,data){
        if (!node){
            return null;
        }
        if (data < node.data){
            node.left = this.removeNode(node.left,data);
            return node;
        }else if (data > node.data){
            node.right = this.removeNode(node.right,data);
            return node;
        }
        else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node
            }
            let min = this.findMinNode(node.right);
            node.data = min.data;
            node.right = this.removeNode(node.right,min.data);
            return  node;
        }
    }

    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    //Traversal the binary tree
    inOrder(node){
        if (node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder(node){
        if (node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node){
        if (node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    //bfs traversal for the binary tree
    bfsTraversal(){
        if (!this.root){
            return;
        }
        this.queue = [];
        this.queue.push(this.root);
        this.output = [];
        while (this.queue.length){
            const node = this.queue.shift();
            if (node.left){
                this.queue.push(node.left);
            }
            if (node.right){
                this.queue.push(node.right);
            }
            this.output.push(node.data);
        }
        return this.output;
    }

    getMin(){
        let node = this.root;
        while (node){
            node = node.left;
        }
        return node.data;
    }
    getMax(){
        let node = this.root;
        while (node){
            node = node.right;
        }
        return node.data;
    }
}

let t1 = new BinarySearchTree();
t1.addNode(2);
t1.addNode(5);
t1.addNode(1);
t1.addNode(9);
console.log(t1);
console.log(t1.bfsTraversal())