// function fibonaciRecursive(n){
//     if(n<2) {
//     return n
//     }

//     return fibonaciRecursive(n-1) + fibonaciRecursive(n-2)

// }
// console.log(fibonaciRecursive(8))

// function IterativeFibonaci (n){
//     let arr = [0,1]
//     for (let i=2; i<n +1; i++){
//         arr.push(arr[i-2]+ arr[i-1])
//     }

//     return arr[n]
// }
// console.log(IterativeFibonaci(3))

function sort (arr){
    for (let i = 0; i<arr.length;i++){
        
        for(let j =i+1;j<arr.length;j++){
            console.log(arr[i],arr[j]);
            if(arr[i]>arr[j]){
            // SWAP   
            var temp =arr[i]
            arr[i] = arr[j]
            arr[j]=temp

            }
        }
    }
    return arr
}
console.log(sort([37,45,29,8,45,78,-1]))