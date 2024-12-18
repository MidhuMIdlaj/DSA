 

 class Node{
    constructor(value){
        this.value = value;
        this.children = []
    }
 }

 class generalTree{
    constructor(){
        this.root = null;
    }

    add(value, parentValue){
        let newNode = new Node(value)

        if(this.root == null){
            this.root = newNode;
            return;
        }
        let parent = this.find(this.root, parentValue)
        if(parent){
            parent.children.push(newNode)
        }
    }

    find(node, value){
        if(node ==  null) return null;
        if(node.value == value) return node;

        for(let childe of node.children){
            let fount =  this.find(childe, value)
            if(fount)return fount
        }
        return null;
    }

    DFS(node =  this.root){
        if(node == null) return null;

        console.log(node.value)

        for(let childe of node.children){
            this.DFS(childe)
        }
    }
 }

 let geTree = new generalTree()
 geTree.add("root")
 geTree.add("children 1","root")
 geTree.add("children 2","root")
 geTree.add("grandChildren","children 1")
 geTree.DFS()

