const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/',(req,res)=>{
    let setTitle="Rohit"
    let setContent="Software Engineer"
    res.sendFile('templates/index.html',{root:__dirname})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})