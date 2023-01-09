const express=require('express');
const router=express.Router();

const studentSchema=require('./studentschema');
const studentController=require('./studentcontroller');
const validator = require('../../middlewares/validator');

<<<<<<< HEAD
router.post('/insert-student',validator(studentSchema.insertStudent),studentController.insertStudent);
router.put('/update-student',validator(studentSchema.updateStudent),studentController.updateStudent);
router.get('/get-student-list',validator(studentSchema.getStudentList),studentController.getStudentList);
router.get('/student-list',validator(studentSchema.studentDataBySequelizeQuery),studentController.studentDataBySequelizeQuery);
router.get('/course-list',validator(studentSchema.courseDetailsBySequelizeQuery),studentController.courseDetailsBySequelizeQuery);
module.exports=router
=======
router.post('/insertstudentdata',validator(studentSchema.insertStudentData),studentControll.insertStudentData);
router.put('/updatestudentdata',validator(studentSchema.updateStudentData),studentControll.updateStudent);
router.get('/getStudentdetails',validator(studentSchema.studentDetail),studentControll.studentDetail);
router.get('/studentDetails',validator(studentSchema.studentDataBySequelizeQuery),studentControll.studentDataBySequelizeQuery);
router.get('/courseDetails',validator(studentSchema.courseDetailsBySequelizeQuery),studentControll.courseDetailsBySequelizeQuery);
module.exports=router
>>>>>>> 6ffce1751e27f23d18db62926239d9db744da657
