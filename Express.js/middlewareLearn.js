const express = require('express');
const fs = require('fs')
const birds = require('./routes/birds')
const blogs = require('./routes/blogs')

const app = express();
const port = 3000;

app.use('/birds', birds)
app.use('/blogs',blogs)

//this is also a middle ware
app.use(express.static('public'))

//first middleware 
app.use((req,res,next)=>{
    fs.appendFileSync("logs.txt",`${Date.now()} at ${req.method} request\n`)
    console.log("middleware 1 start")
    console.log(Date.now(),`get ${req.method}`)
    next();
})

//sceond middleware 
app.use((req,res,next)=>{
    console.log("middleware 2 start")
    next();
})


app.get('/',(req,res)=>{
    console.log("first request get")
    res.send("hello world 2")
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});