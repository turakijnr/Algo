// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// function factorial (num){
//   let total =1
//   for(let i=num; i> 0; i--){
//     total *=i
//   }
//   return total
// }
// console.log(factorial(4));
// function search(arr, val){
//   let start =0
//   let end = arr.length -1
//   let middle = Math.floor((start + end )/2)
//
// console.log(start,end,middle);
//   while (arr[middle]!== val  && start <= end){
//    if(val< arr[middle]){
//         end = middle -1
//    }
//    else start = middle +1
//    middle = Math.floor((start + end) / 2);
//   //  console.log(start,end,middle);
//   }
//    return arr[middle] == val? middle : -1
// }
// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

// function selection(arr){
//   for(let i= 0; i<arr.length; i++){
//     let lowest =i
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[lowest]> arr[j]){
//         lowest = j
//       }

//     }
//     if (i  !== lowest){
//     let temp = arr[lowest]
//     arr[lowest] = arr[i]
//     arr[i]= temp
//     }
//   }
//   return arr
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    currentval = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
      arr[j + 1] = arr[j];
    }
    // if the current value is larger than arr[j]
    arr[j + 1] = currentval;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 76, 8]));

// function insertionSort(arr) {

//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

// console.log(insertionSort([2, 1, 9, 76, 76,8]));
