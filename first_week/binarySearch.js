  
// let arr1 = [1,2,3,4,5,6,7,8,9]
// let target1 = 4;

//   let right = arr1.length-1;
//   let left  = 0;

//   while(left <= right){
//     let middle = Math.floor((left + right)/2)

//     if(arr1[middle] == target1){
//         console.log(arr1[middle]);
//         return
//     }else if(arr1[middle] < target1){
//          left = middle + 1;   
//     }else{
//         right = middle -1;
//     }
//   }


// in recursion 

//  function recursion(arr, left, right, target1){
//     if(left > right){
//         return -1
//     }

//     let middle = Math.floor((left + right)/2)

//     if(arr[middle] == target1){
//         return arr[middle]

//     }else if(arr[middle] > target1){
//         return recursion(arr, middle + 1, right, target1 )
//     }else{
//         return recursion(arr, left, middle -1, target1)
//     }
//  }


// let arr = [1,2,3,4,5,6,7]
// let target1 = 4;

// let result = recursion(arr, 0, arr.length, target1)
// console.log(result);

  