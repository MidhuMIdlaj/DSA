//  queue using stack

 class queueUsingStack{
   constructor(){
    this.stack1 =[]
    this.stack2 =[]
   }
   enqueue(value){
     this.stack1.push(value)
   }

   dequeue(){ 
     if(this.stack2.length == 0){
      while(this.stack1.length > 0){
         this.stack2.push(this.stack1.pop())
      }
     }
     this.stack2.pop()
   }

 }

 let queue = new queueUsingStack()
 queue.enqueue(10)
 queue.enqueue(20)
 queue.enqueue(30)
 queue.dequeue()
 
console.log(queue.stack1);
 console.log(queue.stack2);
 


 
//  stack using queue
class stackUsingQueue{
   constructor(){
    this.queue1 =[]
    this.queue2 = []
   }

   push(value){
    this.queue1.push(value)
   }

   pop(){
    if(this.queue2.length == 0){
      while(this.queue1.length > 0){
        this.queue2.push(this.queue1.shift())
      }

      this.queue2.shift()
    }
   }
}
let stack = new stackUsingQueue()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log(stack.queue2)


