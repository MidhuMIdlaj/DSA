// secondLargest

const arr =[1,2,3,4,5,6,7]

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i]
    }else if(arr[i] > secondLargest && arr[i] != largest){
        secondLargest = arr[i]
    }
}
console.log({largest, secondLargest})



// palindrome
 let string = "abca"
  let left = 0;
  let right = string.length -1;

  while(left < right){
    
    if(string[left] !== string[right]){
        console.log(false);
        return
    }
    left ++;
    right --;
  }
  console.log(true);
  
