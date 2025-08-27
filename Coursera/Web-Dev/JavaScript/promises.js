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


const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
    if(!error){
        resolve({user : "Vaibhav Bhardwaj" , password : "pw@!23" , reg : 12218284})
    } else{
        reject("Error : Something went wrong")
    }
    },1000)
})

p1
.then((user) => {
    console.log(user);       // Logs full user object
    return user.user;         // Returns only the username
}).catch((e) => console.log(e)) // Catches any error above
.then((x) => x.substring(0,5)) // Takes username and slices it
.then((xx) => console.log(xx)); // Logs "Vaibh"
