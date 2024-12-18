class Stack {
    constructor(){
        this.item = []
    }
    
    push(value){
        this.item.push(value)
    }
    
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length ==0
    }
    
    deleteMid(){
        let temp = new Stack()
        let mid = Math.floor(this.item.length/2)
        let count = 0;
        
        while(count < mid){
              temp.push(this.item.pop())
              count ++;
        }
        
        this.item.pop()
        
        while(temp.item.length){
            this.item.push(temp.item.pop())
        }
    }
    reverse(){
        let temp = new Stack;
        
        while(!this.isEmpty()){
            temp.push(this.pop())
        }
        this.item = temp.item
    }
    
    
}
let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.deleteMid()
stack.reverse()
console.log(stack.isEmpty())
console.log(stack.item)





// stack in linked list 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
        this.size ++;
    }

    pop(){
        const popValue = this.top.value;
        this.top  = this.top.next;
        this.size --;
        return popValue;
    }

    peek(){
        return this.top.value
    }

    isEMpty(){
        return this.size == 0
    }
    print(){
        let current = this.top;
        let result =[]

        while(current){
            result.push(current.value)
            current = current.next;
        }
        return console.log(result)
    }
}

let LStack = new Stack()
LStack.push(10)
LStack.push(20)
LStack.push(30)
LStack.pop()
console.log(LStack.peek());
LStack.print()

















