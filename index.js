const express = require('express');
const data = require('./server');
const app = express();

const port = 2022

app.get('/all',(req,res)=>{
    res.send(data)
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})