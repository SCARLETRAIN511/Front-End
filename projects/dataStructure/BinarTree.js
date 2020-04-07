function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new BinaryTreeNode(value);
        if (this.root === null){
            this.root = newNode;
        }else {
            let currentNode = this.root;
            while(true){
                if (value < currentNode.value){
                    //left
                    if (!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    //right
                    if (!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while (currentNode){
            if (value < currentNode.value){
                currentNode = currentNode.left;
            }else if (value > currentNode.value){
                currentNode = currentNode.right;
            }else if (currentNode.value === value){
                return  currentNode;
            }
        }
        return false;
    }

    remove(value){
       if (!this.root){
           return false;
       }
       let currentNode = this.root;
       let parentNode = null;
       while (currentNode){
           if (value < currentNode.value){
               parentNode = currentNode;
               currentNode = currentNode.left;
           }else if (value > currentNode.value){
               parentNode = currentNode;
               currentNode=currentNode.right;
           }else if (value === currentNode.value){

               //option1
               if (currentNode.right === null){
                   if (parentNode === null){
                       this.root = currentNode.left;
                   }else{
                       if (currentNode.value <parentNode.value){
                           parentNode.left = currentNode.left;
                       }else if (currentNode.value > parentNode.value){
                           parentNode.right = currentNode.right;
                       }
                   }


               }//option2 right child doesnt have a left child
               else if (currentNode.right.left === null){
                   currentNode.right.left = currentNode.left;
                   if (parentNode === null){
                       this.root = currentNode.right;
                   }else {
                       if (currentNode.value < parentNode.value){
                           parentNode.left = currentNode.left;
                       }else if (currentNode.value > parentNode.value){
                           parentNode.right = currentNode.right;
                       }
                   }


               }//option3
               else{
                   let leftMost = currentNode.right.left;
                   let leftMostParent = currentNode.right;
                   while (leftMost.left !== null){
                       leftMostParent = leftMost;
                       leftMost = leftMost.left;
                   }

                   leftMostParent.left = leftMost.right;
                   leftMost.left = currentNode.left;
                   leftMost.right = currentNode.right;

                   if (parentNode === null){
                       this.root = leftMost;
                   }else {
                       if (currentNode.value < parentNode.value) {
                           parentNode.left = leftMost;
                       }else if (currentNode.value > parentNode.value){
                           parentNode.right = leftMost;
                       }
                   }
               }

           return true;
           }
       }
    }
}


let bst1 = new BinarySearchTree();
bst1.insert(9);
bst1.insert(2);
bst1.insert(4);
bst1.insert(0);
//test the lookup function
console.log(bst1.lookup(12));
console.log(bst1);