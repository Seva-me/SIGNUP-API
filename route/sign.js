// const express=require('express');
// const router=express.Router();
// const schemaDetail=require('../controller/schem');
// const controll=require("../controller/signup");
// const routequery=require("../controller/rawqueries");
// // const signupmiddlefunction=require('../middleware/mid');
// // const validator=require("../validator/schemavalidator");

// router.get("/rawdata", routequery.selectdata);

// router.post("/insertaddressData",routequery.insertaddressdata);
// router.post("/insertstudentData",routequery.insertstudentdata);

// router.put("/updatestudent",routequery.updateStudent);
// router.put("/updateaddressdata",routequery.updateAddress);


// // router.get('/',controll.getdata);
// // router.post('/post',controll.postdata);



// /*----- route for schema validator middleware -----*/
// // router.post("/post",validator,controll.postdata);
// router.post("/post",validator(schemaDetail),controll.postdata);


// /* route for middleware to validate request body */

// // router.post("/post",signupmiddlefunction,controll.postdata);

// module.exports=router