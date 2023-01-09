const express=require('express');
const router=express.Router();

const studentSchema=require('./studentschema');
const studentController=require('./studentcontroller');
const validator = require('../../middlewares/validator');

router.post('/insert-student',validator(studentSchema.insertStudent),studentController.insertStudent);
router.put('/update-student',validator(studentSchema.updateStudent),studentController.updateStudent);
router.get('/get-student-list',validator(studentSchema.getStudentList),studentController.getStudentList);
router.get('/student-list',validator(studentSchema.studentDataBySequelizeQuery),studentController.studentDataBySequelizeQuery);
router.get('/course-list',validator(studentSchema.courseDetailsBySequelizeQuery),studentController.courseDetailsBySequelizeQuery);
module.exports=router