 class heapMax{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return  max
    }

    heapifyUp(index){
        let parent = Math.floor((index -1) / 2)
        if(index > 0 && this.heap[index] > this.heap[parent]){
        [this.heap[index], this.heap[parent]]  = [this.heap[parent], this.heap[index]]
            this.heapifyUp(parent)
        }
    }
    heapifyDown(index){
        let largest = index;
        let left = 2 * index + 1
        let right = 2 * index + 2

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right;
        }
        if(index !== largest){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            this.heapifyDown(largest)
        }
    }
    disply(){
        console.log(this.heap)
    }
 }

 let heap = new heapMax()
 heap.insert(30)
 heap.insert(9)
 heap.insert(10)
 heap.insert(5)
 heap.insert(4)
 heap.remove()
 heap.disply()


  
  
