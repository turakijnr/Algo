function Ratio(arr) {
    let positive = 0
    let negative = 0
    let zero =0
    let len = arr.length
    for (let i=0;i<len;i++){
        if(arr[i]>0){
            positive++
        }
        else if (arr[i]<0){
            negative++
        }
        else if(arr[i]=== 0){
            zero++
        }
    }
    console.log((positive/len).toPrecision(6))
    console.log((negative/len).toPrecision(6))
    console.log((zero/len).toPrecision(6))

}

console.log(Ratio([1,1,0,-1,-1]))