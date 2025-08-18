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
function add(a,b){
    return a+b;
}
console.log(add(5,10));

//Function Expression
const f = function(a,b){
    return a*b;
}


//Arrow Functions
const ff = (a,b) => a/b;
console.log(ff(10,5));

console.log(f(5,10));



