// bubble sorting
"Definition",
"Bubble Sort repeatedly compares adjacent elements in the array and swaps them if they are in the wrong order. This process continues until the array is sorted",
 arr =[3,6,2,1,4,8,10,9,5]
let n = arr.length;
for(let i=0; i<n-1; i++){
    for(let j=0; j< n-i-1; j++){
        if(arr[j] > arr[j+1]){
            [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}
console.log(arr);


// insertion sorting
"Definition",
"Insertion Sort builds the sorted array one element at a time by picking the next element and inserting it into the correct position"
let arr1 =[3,1,2,5,6,9,7]
for(let i=1; i<arr1.length; i++){
    let key = arr1[i]
    let j =i-1;
    while(j >=0 && arr1[j] > key){
        arr1[j+1] = arr1[j]
        j--;
    }
    arr1[j + 1] = key
}
console.log(arr1);



// selection sort
let arr2 = [4,2,1,9,3,5,7,6]
for(let i=0; i<arr2.length-1; i++){
    let minINdex = i;
    for(let j = i+1; j<arr2.length; j++){
        if(arr2[j] < arr2[minINdex]){
            minINdex = j;
        }
    }
    [arr2[i], arr2[minINdex]] = [arr2[minINdex], arr2[i]]
}
console.log(arr2);



// quick sort
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([6,1,2,8,3,5,9]));




// merge sort
 function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let  mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
 }
 function merge(left, right){
    let result =[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
 }

 console.log(mergeSort([5,4,6,3,7,2,8,1,9]));
 
