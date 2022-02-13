function miniMaxSum(arr) {
    let sortedArr = arr.sort()
    let min = sortedArr[1]+ sortedArr[2]+ sortedArr[3] + sortedArr[4]
    let max = sortedArr[0] + sortedArr[1]+ sortedArr[2]+ sortedArr[3]
    console.log(max,min)
}

