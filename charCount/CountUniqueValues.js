// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));


function sumZero (arr){
    let myarr =[]
   for(let i=0; i < arr.length;i++){
       for(let j= i+1; j<arr.length; j++){
           if(arr[i]+ arr[j]==0){
               return myarr.push(arr[i],arr[j])
           }
           }
       }

   }
  
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));