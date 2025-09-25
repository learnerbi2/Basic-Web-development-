const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use('/blogs',blogs)

// app.get('/aboutUs',(req,res)=>{
//     res.send('Hello About');
// })

// app.get('/contact',(req,res)=>{
//     res.send('contact me at:');
// })

app.get('/',(req,res)=>{
    res.send('Hello Rohit');
})

app.get('/mypath/:slug',(req,res)=>{
     console.log(req.params);
 console.log(req.query);
 res.send(`hello ${req.params.slug}`);
})
app.post('/mynewpath', (req,res)=>{
    console.log("my post request")
    res.send('This is a post request');
})
app.put('/mynewpath', (req,res)=>{
    console.log("my put request")
    res.send('This is a put request');
})

//html end file
app.get('/index', (req,res)=>{
    console.log("Hey its index file")
    res.sendFile('templates/index.html',{root:__dirname});
})

//chain making is possible in express
// app.get('/mypath/:slug',(req,res)=>{
//      console.log(req.params);
//  console.log(req.query);
//  res.send(`hello ${req.params.slug}`);

// }).post('/mynewpath', (req,res)=>{
//     console.log("my post request")
//     res.send('This is a post request');
// }).put('/mynewpath', (req,res)=>{
//     console.log("my put request")
//     res.send('This is a put request');
// })



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});
