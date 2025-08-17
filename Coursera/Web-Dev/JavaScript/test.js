console.log("This is a test file for JavaScript in the Web-Dev directory.");
// var  a = 5;
// a=43
// var a = 111;
// let b = 10;
// b= 13
// env = "Development";
// const c = 12
// let x;
// console.log(x); // This will log 'undefined' since x is declared but not initialized
//c=122 // This will throw an error because 'c' is a constant

// console.log(a);
// console.log(b);
// console.log(env);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log (typeof env);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);    
// console.log(typeof console);

// let st = 11
// let stS = String(st);
// console.log(stS); // This will log '11' as a string
// console.log(typeof stS); // This will log 'string'

// let bo = true;
// let boS = String (bo);
// console.log(typeof boS); // This will log 'string'
// console.log(boS); // This will log 'true' as a string

//--------------------------------OPERATIONS----------------------------------//

// console.log(x); 
// var x = 4;
// console.log(x); 


// console.log(xx); 
// let  xx = 4;
// console.log(xx); 

// const yy = 4;
// console.log(yy);
//console.log(yy); // This will throw an error because 'yy' is not defined before its declaration

const arr = []
for(let a =0;a<4 ;a++){
    arr.push(a)
}
console.log(arr); // This will log [0, 1, 2, 3]


console.log("12" * "112");
const obj = {
    name : "Vaibhav",
    age : 21,
    reg_No : 12218284
}
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);

obj.color = "violet";
console.log(obj);

delete obj.age;
console.log(obj);


if("age" in obj){
    console.log("it existes");
} else{
    console.log("it does not exist");
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty("age"));
console.log(Object.entries(obj).length);

