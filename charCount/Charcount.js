function charcount(str){
    //make object to return at the end
 let result = {}
 // loop through over the string
 for (let i=0;i < str.length;i++){
     let char = str[i]
     // if the char is a number/letter AND not in object, add one to count
     if(result[char]>0){
         result[char]++;
       console.log(result[char]);
     }
     // if the char is a number/letter AND not in object, add it to object and set value to 1
     else{
         result[char]=1
     }

      }
      //if character is something else (space, period, etc) don't do anything
      //return result
      return result
}

console.log(charcount("Hello"));