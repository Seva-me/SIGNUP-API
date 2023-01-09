const joi=require("joi");
const pattern = require('../utilities/pattern')
const insertStudent=joi.object().keys({
    first_name:joi.string().pattern(new RegExp(pattern.namePattern)).required(),
    last_name: joi.string().pattern(new RegExp(pattern.namePattern)).required(),
    age:joi.number().integer().min(5).max(20).required(),
    roll_no:joi.number().integer().required(),
    school_name:joi.string().pattern(new RegExp(pattern.namePattern)).required(),
<<<<<<< HEAD
    blood_group:joi.string().valid('A+','B+','O+','O-','A-','B-','AB+','AB-').required(),
    address_id:joi.number().integer(),
    course_id: joi.number().integer(),
=======
    blood_group:joi.string().pattern(new RegExp(pattern.bloodGroupPattern)).required(),
    address_id:joi.number().integer().required()
>>>>>>> 6ffce1751e27f23d18db62926239d9db744da657
});

const updateStudent=joi.object().keys({
    // data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
    first_name:joi.string().pattern(new RegExp(pattern.namePattern)),
    last_name: joi.string().pattern(new RegExp(pattern.namePattern)),
    age:joi.number().integer().min(5).max(45),
    roll_no:joi.number().integer(),
    school_name:joi.string().pattern(new RegExp(pattern.namePattern)),
<<<<<<< HEAD
    blood_group:joi.string().valid('A+','B+','O+','O-','A-','B-','AB+','AB-'),
=======
    blood_group:joi.string().pattern(new RegExp(pattern.bloodGroupPattern)),
>>>>>>> 6ffce1751e27f23d18db62926239d9db744da657
    address_id:joi.number().integer(),
    course_id: joi.number().integer(),
    id:joi.number().integer().required()
});

const getStudentList=joi.object().keys({
    data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
    id:joi.number()
});

const studentDataBySequelizeQuery=joi.object().keys({
<<<<<<< HEAD
    data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
=======
    data:joi.string().pattern(new RegExp(dataPattern)).required(),
>>>>>>> 6ffce1751e27f23d18db62926239d9db744da657
    id:joi.number()
});

const courseDetailsBySequelizeQuery=joi.object().keys({
    course:joi.string(),
    id:joi.number().required()
});

module.exports={
<<<<<<< HEAD
    insertStudent,
    updateStudent,
    getStudentList,
=======
    insertStudentData,
    updateStudentData,
    studentDetail,
>>>>>>> 6ffce1751e27f23d18db62926239d9db744da657
    studentDataBySequelizeQuery,
    courseDetailsBySequelizeQuery
    }
