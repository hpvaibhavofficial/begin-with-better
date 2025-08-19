//loops 

// const s1 = "Sup fellas";
// for(let x of s1){
//     console.log(x);
// }

//Maps
// const map1 = new Map();

// map1.set("name" , "Vaibhav Bhardwaj")
// map1.set("age",22)
// map1.set("reg_no",12218284)

// for(key in map1){
//     console.log(key);
// }

// // console.log(map1)
// // for (const [key,val] of map1) {
// //     console.log(key +" :- "+ val);   
// // }

// //Objects

// // const obj1 = {
// //     name: "Vaibhav Bhardwaj",
// //     age : 22,
// //     reg_No : 12218284
// // };

// // for(const key in obj1){
// //     console.log(key + "-" +obj1[key]);
// // }

// // let arr2 = ["python","Ruby","R","JavaScript","Java","C++","C#"];

// // for(const x in arr2){
// //     console.log(x + "-"+arr2[x]);
// // }


// const arr = [
//     {
//         title : "The Dark Face of Love",
//         author : "Guinevere Beck",
//         price : 499,
//         genre : "Romance Crime Thriller",
//         edition : 2022
//     },

//     {
//         title : "The Silent Patient",
//         author : "Alex Michaelides",
//         price : 599,
//         genre : "Psychological Thriller",
//         edition : 2020
//     },

//     {
//         title : "The Midnight Library",
//         author : "Matt Haig",
//         price : 399,
//         genre : "Fantasy Fiction",
//         edition : 2021
//     },

//     {
//         title : "Where the Crawdads Sing",
//         author : "Delia Owens",
//         price : 499,
//         genre : "Mystery Drama",
//         edition : 2019
//     }
// ]

// arr.forEach((book) => console.log(book.title));
// arr.forEach((book) => console.log(`${book.title} by ${book.author} is a ${book.genre} book.`));

//Functions
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,10));

// //Function Expression
// const f = function(a,b){
//     return a*b;
// }


// //Arrow Functions
// const ff = (a,b) => a/b;
// console.log(ff(10,5));

// console.log(f(5,10));
// const mySybn = Symbol("key1");

// const jsUser = {
//     name : "Vaibhav Bhardwaj",
//     age : 21,
//     [mySybn] : "mykey1",
//     location : "Punjab",
//     email : "vaubhav.lpu.edu.in",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
// }

// console.log(jsUser)
// console.log(jsUser.name)
// console.log(jsUser["email"])  
// console.log(jsUser[mySybn]) 

// jsUser.email = "vaibhav.12218284@lpu.edu.in";
// console.log(jsUser.email);
// Object.freeze(jsUser); // This will prevent any changes to the object
// jsUser.email = "gsfgsh";
// console.log(jsUser.email);

// const user = new Object();
// user.name = "Bruce Wayne";
// user.age = 30;
// user.isLoggedIn = true;
// user.lastLoginDays = ["Monday", "Tuesday"];
// user.email = "bruce.wayne@edu.in"
// console.log(user);

// //Accessing object properties
// console.log(user.name);
// console.log(user["name"]);

// //Modifying Properties
// user.age = 31
// console.log(user.age);

// //Adding new properties
// user.location = "Gotham City";
// console.log(user.location);

// //Deleting Properties
// delete user.isLoggedIn;
// console.log(user);

// //Iterating over object properties
// for(const key in user){
//     console.log(`The keys is ${key} and value is  ${user[key]}`)
// }

//Objects nested 

// const tinderUser = {
//     email : "bruce.wayne@edu.in",
//     fullname : {
//         userfullname : {
//             firstname : "Bruce",
//             lastname : "Wayne"
//         }
//     }
// }

// console.log(tinderUser.fullname.userfullname.firstname)

const obj1 = {1:'a' , 2:'b'}
// const obj2 = {3:'c',  4 : 'd'}
// // const obj3 = {obj1,obj2};
// // console.log(obj3);

// const obj4  = Object.assign(obj1,obj2);
// console.log(obj4);

// console.log(obj4 === obj1);
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
// console.log(obj1.hasOwnProperty(1))
// console.log(1 in obj1)

const objj = {
    name : "Bruce Wayne",
    productionHouse:"DC Extended",
    genere : "Superhero"
}

// console.log(productionHouse)
const {productionHouse: pdh} = objj
console.log(pdh)


