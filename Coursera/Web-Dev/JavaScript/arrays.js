// let arr = [11,112,133,"VAIBAHV",true,undefined, {name:"Vaibhav" , age : 21} ,NaN,null]
// console.log(arr);

// let aa = new Array(1,2,3,4,5,"STROINF",true);
// console.log(aa);
// let emp = new Array(6).fill(0);
// console.log(emp); 
// emp.push("New Element");
// console.log(emp);

// console.log(emp.length);
// emp.unshift("First Element");
// console.log(emp);

// //using array methods

// let a = ["HTML", "CSS", "JS"];
// a.push("Node")
// console.log(a); 
// a.unshift("RESt");
// console.log(a);

// a.pop();
// console.log(a);
// a.shift();
// console.log(a);


// let b = [1,2,3,6,7,8,9];

// //removing from splice
// let c=b.splice(2,3);
// console.log(b); 
// console.log("Removed elements are : "+c); //c will contain the removed elements

// //adding from splice
// b.splice(2,0,3,4,5,6,6)
// console.log(b);


// //replacing elements using splice
// b.splice(6,1,7);
// console.log(b);

// b.splice(4);
// console.log("After removing from 4th index : "+b);

// b.splice(-2,1)
// console.log("After removing from -2 index : "+b);

// console.log(b.indexOf(2));
// console.log(b.includes(2));
// console.log(b.lastIndexOf(2,1));

// let d = new Array(5).fill(8);
// console.log(d);
// console.log(b.concat(d));

// let ne = b.concat(d)
// console.log(ne.toString());
// console.log(typeof ne.toString());

let arr = new Array("Bizon","MP5","AK47","M4A1","AWM","Desert Eagle","G-18","USP-S","P90","Famas","M1887");
console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i] );
// }

// for(let i of arr){
//     console.log(i);
// }

// for (i in arr){
//     console.log(i+ " : "+arr[i]);
// }

// arr.forEach((element,ind)  => {
//     console.log(ind + " : "+element);
// })

arr.sort();
console.log("Sorted Array : "+arr);

arr.reverse();
console.log("Reversed Array : "+arr);

let x = [1,2,3,4,5,6,7,8,9,10]
let u = x.map((xx)=> xx*2);
console.log("Mapped Array : "+u);

// Array creation methods
//  -> using array literals []  let a = [01,112,22,"ss

//  -> using new keyword (Constructor) = let a  = new Array(1,21,221)
// Methods used in array
// -> arr.length()  - returns length of an array            
// -> arr.push()    - adds an element to last of array
// -> arr.unshift() - adds an element to front of an array      
// -> arr.pop()     - remove an element from end of array
// -> arr.shift()   - removes an element from begining of an Array
// -> arr.splice()  - removes an element from any position in array
// -> arr.slice()   - returns a shallow copy of a portion of an array
// -> arr.indexOf() - returns the index of first occurence of an element in array
// -> arr.lastIndexOf() - returns the index of last occurence of an element in array
// -> arr.includes() - checks if an element is present in array

// -> arr.join()    - joins all elements of an array into a string
// -> arr.reverse() - reverses the order of elements in an array
// -> arr.sort()    - sorts the elements of an array
// -> arr.map()     - creates a new array with the results of calling a function for

// each element in the array
// -> arr.filter()  - creates a new array with all elements that pass the test implemented by the provided function
// -> arr.reduce()  - executes a reducer function on each element of the array, resulting

// in a single output value
// -> arr.forEach() - executes a provided function once for each array element
// -> arr.every()   - tests whether all elements in the array pass the test implemented by the provided function


// -> arr.some()    - tests whether at least one element in the array passes the test implemented by the provided function
// -> arr.find()    - returns the value of the first element in the array that satisfies the provided testing function
// -> arr.findIndex() - returns the index of the first element in the array that satisfies the provided testing function        
// -> arr.fill()    - fills all elements of an array from a start index to an end index with a static value
// -> arr.copyWithin() - shallow copies part of an array to another location in the same
// array and returns it, without modifying its length
// -> arr.flat()    - creates a new array with all sub-array elements concatenated into 

// it recursively up to the specified depth
// -> arr.flatMap() - first maps each element using a mapping function, then flatt










