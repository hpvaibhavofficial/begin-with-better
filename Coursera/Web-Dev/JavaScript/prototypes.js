function createUser(username,score){
    this.username = username;
    this.score = score;
}
const u1 = new createUser("Vaibhav",23)
createUser.prototype.hello = function(){
    console.log(`Hello ${this.username}`);
    
}
console.log(createUser.prototype);
u1.hello()
