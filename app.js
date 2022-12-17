const express=require('express');
const app=express();
app.use(express.json());
const jwt=require('jsonwebtoken')
require('dotenv').config()
const port=process.env.PORT;



// const f1=require('./middleware/mid')

// app.use(f1)

const get_data=require('./route/sign');
app.use('/',get_data);

const sqlResults=require('./route/sign');
app.use('/qry',sqlResults)

const post_data=require('./route/sign')
app.use('/post',post_data)


app.listen(port,()=>{
    console.log("server is running at  ",port)
});