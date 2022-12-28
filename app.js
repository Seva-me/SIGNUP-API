const express=require('express');
const app=express();
app.use(express.json());
const jwt=require('jsonwebtoken')
require('dotenv').config()
const port=process.env.PORT;

const addressIndex=require('./controller/address/addressindex');
app.use('/',addressIndex);

const studentIndex=require('./controller/student/studentIndex')
app.use('/',studentIndex);

const joinIndex=require('./controller/student/studentIndex')
app.use('/',joinIndex);

const updateStudentindex=require('./controller/student/studentIndex')
app.use('/',updateStudentindex);

// const selectquery=require('./route/sign');
// app.use("/rawdata",selectquery);

// const insertaddress=require('./route/sign');
// app.use('/insertaddressData',insertaddress);

// const insertstudent=require('./route/sign');
// app.use('/insertstudentData',insertstudent);

// const updateStudents=require('./route/sign');
// app.use("/updatestudent",updateStudents)


// const updateaddress=require('./route/sign');
// app.use("/updateaddressdata",updateaddress)

// const getData=require('./route/sign');
// app.use('/',getData);

// const sqlResults=require('./route/sign');
// app.use('/qry',sqlResults)

// const postData=require('./route/sign')
// app.use('/post',postData)

app.listen(port,()=>{
    console.log("server is running at  ",port)
});