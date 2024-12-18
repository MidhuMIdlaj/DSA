class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root =  null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(current, newNode){
        if(newNode.value > current.value ){
            if(current.right ==  null){
                current.right = newNode;
            }else{
                this.insertNode(current.right, newNode)
            }
        }else{
           if(current.left == null){
            current.left = newNode
           }else{
            this.insertNode(current.left, newNode)
           } 
        }
    }




    // largest and secondLargest
    largest(node = this.root){
        if(!node) return null;
        while(node.right){
            node= node.right
        }
        return node.value
    }
    
    secondLargest(node = this.root){
        if(!node)return null;
        let parent = null;
        
        while(node.right){
            parent = node;
            node = node.right;
        }
        
        if(node.left){
           return this.largest(node.left)
        }
        
        return parent ? parent.value : null
    }
    





    // smallest and secondSmallest
    smallest(node = this.root){
        if(!node)return null;
        while(node.left){
            node = node.left;
        }
        return node.value
    }
    
    secondSmallest(node = this.root){
        if(!node) return null;
        
        let parent = null;
        while(node.left){
            parent = node;
            node = node.left;
        }
        
        if(node.right){
            return this.smallest(node.right)
        }
        return parent.value
    }

    search(value, node = this.root) {
        if (!node) return false; 
        if (node.value === value) return true; 

        if (value < node.value) {
            return this.search(value, node.left); 
        } else {
            return this.search(value, node.right); 
        }
    }


// DFS
    preOrderTravel(Node = this.root, result =[]){
        if(Node){
            result.push(Node.value)
            this.preOrderTravel(Node.left, result)
            this.preOrderTravel(Node.right, result)
        }
        return result
    }

    inOrderTravel(Node = this.root, result =[]){
        if(Node){
            this.inOrderTravel(Node.left, result)
            result.push(Node.value)
            this.inOrderTravel(Node.right, result)
        }
        return result
    }

    postOrderTravel(node = this.root, result =[]){
        if(node){
            this.postOrderTravel(node.left, result)
            this.postOrderTravel(node.right, result)
            result.push(node.value)
        }
        return result
    }
    
// BFS
    BFS(){
        if(!this.root) return null;
        
        let queue =[]
        let result = []
        queue.push(this.root)
        
        while(queue.length > 0){
            let current = queue.shift()
            result.push(current.value)
            
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return result
    }


    isBTS(node =  this.root, min = -Infinity, max = Infinity){
        if(!node) {
            return true
        }

        if(node.value <= min || node.value >= max)return false;

        return (
            this.isBTS(node.left, min, node.value)&&
            this.isBTS(node.right,node.value, max )
        );
    }

    
    areIdentical(node1, node2){
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        
        return(
            node1.value === node2.value &&
            this.areIdentical(node1.left , node2.left)&&
            this.areIdentical(node1.right, node2.right)
            )
        
    }
}
let BST = new BinarySearchTree()
BST.insert(10)
BST.insert(7)
BST.insert(80)
BST.insert(20)
 console.log(
     BST.isBTS()
 );
console.log(JSON.stringify(BST,null,2));
console.log(BST.preOrderTravel());
console.log(BST.inOrderTravel());
console.log(BST.postOrderTravel());
