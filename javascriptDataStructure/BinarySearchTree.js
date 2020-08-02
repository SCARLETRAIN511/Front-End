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
        else{
            if (!node.left && !node.right){
                node = null;
                return node;
            }if (!node.left){
                node = node.right;
                return node;
            }if (!node.right){
                node = node.left;
                return node
            }
        }



    }
}

