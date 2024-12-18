  note : "you  implement the all think in this page with function keyword"
// for reverse  
  function reverse(){
    let prev =  null;
    let current = this.head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev  = current;
        current = next;
    }
    this.head = prev
  }


//   deleteElement 
  function deleteElement(value){
    if(!this.head){
        return 
    }
    if(this.head.value == value){
        this.head =this.head.next
        return;
    }
    let current = this.head;
    while(current.next && current.next.value !== value){
        current =current.next
    }
    if(current.next){
        current.next  = current.next.next
    }
  }
   

//  find middleElement 
 function middleElementFind(){
    let slow =  this.head ; 
    let fast  = this.head ;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow ? slow.value : null;
 }
 

//    delete middleElement 
function deleteMiddleElement(){
    if(!this.head || !this.head.next){
        this.head = null;
        return;
    }
    let slow = this.head;
    let fast = this.head
    let prev = null

    while(fast && fast.next){
        prev =slow;
        slow = slow.next;
        fast = fast.next.next
    }
    prev.next = slow.next
}

// lst element delete
function lastDelete(){
   let current = this.head;

   while(current.next && current.next.next){
    current = current.next
   }

   current.next =  null
}

// find Element
 function findElement(value){
    if(this.head.value ==  value){
        return console.log(this.head.value)
    }
    let current = this.head;
    while(current.next && current.next.value != value ){
        current =  current.next
    }
    return console.log(current.next.value);
}

// insert as head 
function newOne(value){
  let newNode = new Node(value)
  newNode.next = this.head;
  this.head = newNode    
}

// insert to after  middle 
 function findMiddle(){
  let slow = this.head;
  let fast = this.head;

  while(fast && fast.next ){
      slow =  slow.next;
      fast = fast.next.next
  }
  return slow 
}
 function insertMiddle(value){
  let newNode = new Node(value)
  let middle = this.findMiddle()
  if (middle) {
      newNode.next = middle.next; 
      middle.next = newNode;     
  }
}
// insert to before  middle 
function findMiddle(){
  let slow = this.head;
  let fast = this.head;

  while(fast && fast.next ){
      slow =  slow.next;
      fast = fast.next.next
  }
  return slow 
}

function insertBeforeMiddleElement(value){
  let newNode = new Node(value)
  let middle = this.findMiddle()

   let current = this.head 
   
   while(current && current.next != middle){
      current = current.next
   }

   if(current){
      newNode.next = current.next;
      current.next =newNode
   }
}

// getTail
 function getTail() {
  if (!this.head) {
      return null; 
  }
  let current = this.head;
  while (current.next) {
      current = current.next;
  }
  return current; // The last node
}



                          //  double linked List 
        
    // printForward
  function printForward(){
       let current = this.head;
       let arr =[]

       while(current){
        arr.push(current.value)
        current = current.next;
       }
       return console.log(arr);
  }

  function printBackWard(){
     let current = this.tail;
     let arr = []

     while(current){
      arr.push(current.value)
      current = current.prev
     }
     return console.log(arr);
     
  }




