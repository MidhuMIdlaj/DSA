 class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
 }

 class linkedList{
     constructor(){
        this.head = null;
     }

     append(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            return;
        }

        let current   = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
     }

     findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next ){
            slow =  slow.next;
            fast = fast.next.next
        }
        return slow 
     }

    insertBeforeMiddleElement(value){
        let newNode = new Node(value)
        let middle = this.findMiddle()

         let current = this.head 

         while(current.next != middle){
            current = current.next
         }

         if(current){                  
            newNode.next = current.next;
            current.next =newNode
         } 
    }

     print(){
        let current = this.head;
        let arr =[]

        while(current){
          arr.push(current.value)
          current = current.next
        }
        return console.log(arr)
     }
 }

 let list  =  new linkedList()
 list.append(10)
 list.append(20)
 list.append(30)
 list.insertBeforeMiddleElement(50)
 list.print()



 
//  double LinkedList 

    class SNode{
        constructor(value){
            this.value = value;
            this.head = null;
            this.tail = null
        }
    }

    class secondLinkedList{
        constructor(){
            this.next =null;
            this.prev = null;
        }

        append(value){
            let newNode = new SNode(value)

            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{

                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }

        printForward(){
            let current = this.head;
            let arr =[]

            while(current){
                arr.push(current.value)
                current = current.next;
            }
            return console.log(arr);
            
        }
    }
 let SList = new secondLinkedList()
 SList.append(10)
 SList.append(20)
 SList.append(30)
 SList.printForward()
 

