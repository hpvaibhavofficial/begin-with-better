// const prom1 = new Promise(function(resolve,reject){
//     //async task
//     setTimeout(function(){
//         console.log("Async task is here");
//         resolve()
//     },1000);
// })

// prom1.then(function(){
//     console.log("Promise Consumed");
// })

// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username : "vaibahv" , email : "vb@exa.com" , age : 22})
//     },2000)
    
// })

// promise1.then((data) => {
//     console.log(data);
// })


// const p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//     if(!error){
//         resolve({user : "Vaibhav Bhardwaj" , password : "pw@!23" , reg : 12218284})
//     } else{
//         reject("Error : Something went wrong")
//     }
//     },1000)
// })

// p1
// .then((user) => {
//     console.log(user);       // Logs full user object
//     return user.user;         // Returns only the username
// }).catch((e) => console.log(e)) // Catches any error above
// .then((x) => x.substring(0,5)) // Takes username and slices it
// .then((xx) => console.log(xx)); // Logs "Vaibh"


// const promi = new Promise(function(resolve,reject){
//     let e = false;
//     if(!e){
//         resolve({username : "vb1292d" , pwd : "3245678bcv"})
//     } else{
//         reject("Error : Js went wrong.")
//     } 
// })

// async function consume(){
//     try{
//         const res = await promi
//         console.log("The object returned is " + JSON.stringify(res));
//     } catch(e){
//         console.log(e);
//     }
// }

// consume()


// async function getAllUsers() {
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json()
//     console.log(data);
//     } catch(e){
//         console.log("error" ,e);   
//     }
// }
// getAllUsers()
// 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// })
// .then((d) => console.log(typeof d))
// .catch((e)=>console.log(e))

async function userRes(){
    const response  =  await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    const data = await response.json()
    console.log(typeof data);
    console.log(data[0].username);
    }

userRes()