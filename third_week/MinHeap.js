
class MinHeap {
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
        return max
    }

    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        if(index > 0 && this.heap[index] < this.heap[parent]){
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            this.heapifyUp(parent)
        }
    }

    heapifyDown(index){
        let smallest = index;
        let left = index * 2 +1;
        let right = index *  2 +2;

        if(index < this.heap.length && this.heap[left] < this.heap[smallest]){
            left = smallest;
        }
        if(index < this.heap.length && this.heap[right] < this.heap[smallest]){
            right =  smallest;
        }

        if(index !== smallest){
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            this.heapifyDown(smallest)
        }
    }

    display(){
        console.log(this.heap)
    }

}
let heap =  new MinHeap()
heap.insert(10)
heap.insert(300)
heap.insert(15)
heap.insert(60)
heap.insert(45)
heap.insert(1)
heap.remove()
heap.display()
