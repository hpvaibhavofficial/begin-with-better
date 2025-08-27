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

const promise1 = new Promise(function(resolve,reject){
    resolve({username : "vaibahv" , email : "vb@exa.com" , age : 22})
})

promise1.then((data) => {
    console.log(data);
    
})
