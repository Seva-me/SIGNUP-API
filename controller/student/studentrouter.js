const express=require('express');
const router=express.Router();

const studentSchema=require('./studentschema');
const studentControll=require('./studentcontroller');
const validator = require('../../middlewares/validator');

router.post('/insertstudentdata',validator(studentSchema.insertStudentData),studentControll.insertStudentData);
router.put('/updatestudentdata',validator(studentSchema.updateStudentData),studentControll.updateStudent);
router.get('/getStudentdetails',validator(studentSchema.studentDetail),studentControll.studentDetail);
router.get('/studentDetails',validator(studentSchema.studentDataBySequelizeQuery),studentControll.studentDataBySequelizeQuery);
router.get('/courseDetails',validator(studentSchema.courseDetailsBySequelizeQuery),studentControll.courseDetailsBySequelizeQuery);
module.exports=router
