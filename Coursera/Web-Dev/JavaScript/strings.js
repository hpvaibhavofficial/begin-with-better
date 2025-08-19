let str = "Learning javascript strings"
console.log(typeof str)

let str1 = new String("Learning javascript strings")
console.log(typeof str1) 

// console.log(str.length) // Length of the string
// console.log(str1.length) // Length of the string object
// console.log(str.charAt(0)) // First character of the string
// console.log(str1.charAt(0)) // First character of the string object
// console.log(str.indexOf("javascript")) // Index of substring
// console.log(str1.indexOf("javascript")) // Index of substring in string object  
// console.log(str.lastIndexOf("s")) // Last index of character 's'
// console.log(str1.lastIndexOf("s")) // Last index of character 's' in

// // string object
// console.log(str.includes("javascript")) // Check if substring exists  
// console.log(str1.includes("javascript")) // Check if substring exists in string object
console.log(str.startsWith("Learning")) // Check if string starts with substring  
console.log(str1.startsWith("Learning")) // Check if string object starts with substring


console.log(str.split(" "));
console.log(str1.split("").reverse().join(""));




