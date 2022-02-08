// function reverse(str) {
//     const backwards = [];
//     const totalItems= str.length -1;
//     for(let i= totalItems; i>=0; i--){
//         backwards.push(str[i]);

//     }
    
    
//     console.log(backwards);
//     return backwards.join('');
   

// }
// reverse('my name is Nuuman');


// solution 2 :
// function reverse2(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverse2(' my name is Nuuman'))

// using ES6

// const reverse3 = str => str.split('').reverse().join('');

// console.log(reverse3('my name is nuuman'));


// another fancy solution

const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('my name is nuuman'));
