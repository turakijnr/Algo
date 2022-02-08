// var moveZeroes = function(nums) {
//     for(let i =0; i<nums.length; i++) {
//         console.log(nums[i]);
//          if(nums[i] ===0) {
//             let moveElement =  nums.splice(i,1);
//                     replace 1 element at index i
//             console.log(moveElement);
//              nums.push(moveElement)
//              i = i-1
//         }
//     }
//      return nums;
//      }

//  console.log(moveZeroes([0,0,7,9,5,6]))

//   var newArray = (nums, val) => {
//      nums = nums.filter((n) => n !== val);
//     //  console.log(arr);
//      //return nums;
//   }
var removeElement = function (arr, val) {
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === val) {
      nums.splice(i, 1);
      i--;
      console.log(i);
    }
  }
  return arr;
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
//   console.log(newArray([3,3,2,2,2,1,1, 2, 2, 3], 2));
// function merge(arr1, arr2) {
//   let mergeArr = [];
//   i = 0;
//   j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArr.push(arr1[i]);
//       i++;
//     } else {
//       mergeArr.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergeArr.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     mergeArr.push(arr2[j]);
//     j++;
//   }
//   return mergeArr;
// }

// console.log(merge([], [2, 14, 99, 100]));

//

function pivot(arr, start = 0, end = arr.length +1 ) {
  console.log(end);
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    var pivot = arr[start];
    var swapindx = start;
    for (var i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapindx++;
        swap(arr, swapindx, i);
      }
    }
    swap(arr, start, swapindx);
  return swapindx;
}

function Quicksort(arr, left= 0, right = arr.length -1){
  if(left<right){ 
    let pivotindx = pivot(arr, left, right)
    Quicksort(arr,left,pivotindx -1)
    Quicksort(arr,pivotindx +1, right)
  }
  return arr
}

console.log(Quicksort([4,100,-3, 8, 2, 1, 5, 7, 6, 3]));
