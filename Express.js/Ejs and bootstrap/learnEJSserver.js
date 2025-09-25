const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    let setTitle="Rohit"
    let setContent="Software Engineer"
    res.render('index',{setTitle:setTitle,setContent:setContent})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})