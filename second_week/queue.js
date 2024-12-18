class Queue{
    constructor(){
        this.item = []
    }
    
    enqueue(value){
        this.item.push(value)
    }
    
    dequeue(){
        return this.item.shift()
    }
    peek(){
        return this.item[0]
    }
    isEmpty(){
        return this.item.length ==0
    }
    
    midDelete(){
        let temp = new Queue()
        let mid =  Math.floor(this.item.length/2)
        let count = 0;
        
        while(count < mid){
            temp.enqueue(this.item.shift())
            count++
        }
        
        this.item.shift()
        
        while(temp.item.length){
            this.enqueue(temp.item.shift())
        }
    }
    
    reverse(){
        let temp = []
        
        while(!this.isEmpty()){
           temp.push(this.item.shift())
        }
        this.item = temp.reverse()
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.midDelete()
queue.reverse()
console.log(queue.peek())
console.log(queue.item)



 // // queue Example in linkedList
 class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
 }

 class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        let newNode = new Node(value)

        if(!this.front && !this.rear){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue(){
        let shiftElement = this.front.value;
        this.front = this.front.next;
        return shiftElement;
    }

    print(){
        let current = this.front;    
        let result = []

        while(current){
            result.push(current.value);
            current = current.next;
        }
        return console.log(result);
    }
 }

 let queue = new Queue()
 queue.enqueue(10)
 queue.enqueue(20)
 queue.enqueue(30)
 queue.dequeue()
 queue.print()

