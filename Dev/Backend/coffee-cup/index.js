const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("Hello i am working")
})

app.get('/tw',(req,res) => {
    res.send("Hello its twitter")
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})

