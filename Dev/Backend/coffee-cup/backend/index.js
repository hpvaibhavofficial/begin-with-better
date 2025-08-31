require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/',(req,res) => {
    res.send("Hello i am working")
})

app.get('/tw',(req,res) => {
    res.send("Hello its twitter")
})

app.get('/api/jokes',(req,res)=>{
        const jokes = [
    {
        id: 1,
        title: 'This is the first joke.',
        content: 'Why don’t scientists trust atoms? Because they make up everything!'
    },
    {
        id: 2,
        title: 'This is the second joke.',
        content: 'Why did the math book look sad? Because it had too many problems.'
    },
    {
        id: 3,
        title: 'This is the third joke.',
        content: 'Why don’t programmers like nature? It has too many bugs.'
    },
    {
        id: 4,
        title: 'This is the fourth joke.',
        content: 'Why did the computer go to the doctor? Because it caught a virus!'
    },
    {
        id: 5,
        title: 'This is the fifth joke.',
        content: 'Why did the scarecrow win an award? Because he was outstanding in his field.'
    }
    ]
    res.send(jokes)

})
app.listen(port,()=>{
    console.log(`Server running at : http://localhost:${port}/`);
})

