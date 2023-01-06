const express=require('express');
const router=express.Router();

const studentSchema=require('./studentschema');
const studentControll=require('./studentcontroller');
const validator = require('../../middlewares/validator');

router.post('/insertstudentdata',validator(studentSchema.insertStudentschema),studentControll.insertStudentdata);
router.put('/updatestudentdata',validator(studentSchema.updatestudentSchemas),studentControll.updateStudent);
router.get('/getStudentdetails',validator(studentSchema.studentDetailschemas),studentControll.studentDetail);
router.get('/studentDetails',validator(studentSchema.studentbySequelizequerychema),studentControll.studentDatabysequelizequery);
module.exports=router