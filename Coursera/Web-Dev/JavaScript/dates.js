// let mydate = new Date();
// console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());
// console.log(mydate.getDate());
// console.log(mydate.getDay()); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
// console.log(mydate.getHours());     
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
// console.log(mydate.getMilliseconds());   
// console.log(mydate.getTime()); // milliseconds since January 1, 

let datt = new Date(2022,1,22); 
console.log(datt);
let datt2 = new Date(2025,0,21,22,12,11);
console.log(datt2);
console.log(datt2.toLocaleDateString());
let da = new Date("2022-01-21");
console.log(da.toLocaleDateString());

let dds = new Date();
console.log(dds.toLocaleDateString());