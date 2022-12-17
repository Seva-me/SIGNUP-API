const express=require('express');
// const app=express();
const datadb=require('../models/index');
const { QueryTypes } = require('sequelize');
const router=express.Router();
const schemaDetail=require('../controller/schem')
const controll=require("../controller/signup");

// const signupmiddlefunction=require('../middleware/mid');
const validator=require("../validator/schemavalidator");

// const sqlQuery=require("../controller/query");


router.get("/selectData",async (req,res)=>{
    try{
        console.log(req.body)
        let result;
        switch(req.body.data){
            case'studentsdata':
                result = await datadb.sequelize.query('select * from students',{type: QueryTypes.SELECT});
                break;
            
            case'addressdata':
                result= await datadb.sequelize.query('select * from addresses',{type: QueryTypes.SELECT});
                break;
            
            case'age':
                result=await datadb.sequelize.query('select name,age  from students',{type: QueryTypes.SELECT});
                break;
            
            case 'alldata':
                result=await datadb.sequelize.query('select students.*,addresses.* from students left join addresses on students.student_id=addresses.address_id union select students.*,addresses.* from students right join addresses on students.student_id=addresses.address_id',{type: QueryTypes.SELECT});
                break;
    
            default:
                result=await datadb.sequelize.query(req.body.data,{type: QueryTypes.SELECT});
                return res.status(204).json({data:result});
                break;
        }
        console.log(result)
    if(result.length==0){
        return res.status(204).json({data:result});
    }    
    return res.status(200).json({data:result});
    }
    catch(err){
        // console.log(err)
        if(err.name=='SequelizeDatabaseError'){
            res.status(400).send("Bad Request")
        }
    }
});


router.post("/insertaddressdata",async(req,res)=>{
        const insertData=await datadb.sequelize.query('insert into addresses (state,district,pincode,city,house_no,address_live,createdAt,updatedAt) values("odisha","puri",936952,"khandagiri","#18",false,"2022-11-15","2022-12-13")',{type: QueryTypes.INSERT});
        return res.status(200).send("Data is inserted"); 
});

router.post("/insertstudentdata",async(req,res)=>{
    const insertData=await datadb.sequelize.query('insert into students (name,marks,subject,age,createdAt,updatedAt,color) values("micheal",92,"physics",35,"2022-11-13","2022-12-15","black")',{type: QueryTypes.INSERT});
    console.log(insertData)
    return res.status(200).send("Data is inserted");
});


router.get('/random',async(req,res)=>{
    // let randomquery=req.body.data
    // let result="select * from students where age between 22 and 28"
    const data1=await datadb.sequelize.query(req.body.data,{type:QueryTypes.SELECT})
    return res.json({data:data1})});



router.get('/',controll.getdata);
// router.post('/post',controll.postdata);



/*----- route for schema validator middleware -----*/
// router.post("/post",validator,controll.postdata);
router.post("/post",validator(schemaDetail),controll.postdata);


/* route for middleware to validate request body */

// router.post("/post",signupmiddlefunction,controll.postdata);

module.exports=router