function search(arr, val) {

    for(var i = 0; i< arr.length; i++){
        if (arr[i]=== val) return i
    }
    return -1

}

console.log(search([4,3,4,5,],3))