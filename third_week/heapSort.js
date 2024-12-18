 
  function heapSort(arr, length, index){
    let largest = index;
    let leftChilde = index * 2 + 1;
    let rightChilde = index * 2 + 2;

    if(leftChilde  < length && arr[largest] < arr[leftChilde]){
        largest = leftChilde;
    }
    if(rightChilde < length && arr[largest] < arr[rightChilde]){
        largest = rightChilde;
    }
    if(index !== largest){
        [arr[index], arr[largest]] = [arr[largest], arr[index]]
        heapSort(arr,length, largest)
    }
  }

  function sort(arr){
    let length =  arr.length;

    for(let i= Math.floor(length / 2)-1 ; i > 0; i--){
        heapSort(arr, length, i)
    }

    for(let i= length -1 ; i >0 ; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapSort(arr,i,0)
    }
  }

  let arr =[5,3,6,2,6,7,1,0]
  sort(arr)
  console.log(arr);
  