// function greet(username = "your useername here"){
//     console.log( `Good Morning ${username}`)
// }

// greet("Vaibhav")

// console.log(this);
// const user = {
//     username : "Vaibhav",
//     password : "vb@123",
//     welcomeMessage : function(){
//         console.log(`Welcome back , ${this.username}`)
//         console.log(this)
//     }

// }

// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }

// chai()

// function code(){
//     let username = "vb"
//     console.log(this.username);
// }
// code()

function code() {
  this.username = "vb";
  console.log(this.username);
}

new code(); // "vb"
