const joi=require("joi");
const pattern = require('../utilities/pattern')
const insertStudent=joi.object().keys({
    first_name:joi.string().pattern(pattern.namePattern).required(),
    last_name: joi.string().pattern(pattern.namePattern).required(),
    age:joi.number().integer().min(5).max(20).required(),
    roll_no:joi.number().integer().required(),
    school_name:joi.string().pattern(pattern.namePattern),
    blood_group:joi.string().valid('A+','B+','O+','O-','A-','B-','AB+','AB-')
});

const updateStudent=joi.object().keys({
    // data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
    first_name:joi.string().pattern(pattern.namePattern),
    last_name: joi.string().pattern(pattern.namePattern),
    age:joi.number().integer().min(5).max(45),
    roll_no:joi.number().integer(),
    school_name:joi.string().pattern(pattern.namePattern),
    blood_group:joi.string().valid('A+','B+','O+','O-','A-','B-','AB+','AB-'),
    address_id:joi.number().integer(),
    course_id: joi.number().integer(),
    id:joi.number().integer().required()
});

const getStudentList=joi.object().keys({
    data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
    id:joi.number()
});

const studentDataBySequelizeQuery=joi.object().keys({
    data:joi.string().pattern(new RegExp(pattern.dataPattern)).required(),
    id:joi.number()
});

const courseDetailsBySequelizeQuery=joi.object().keys({
    course:joi.string(),
    id:joi.number().required()
});

module.exports={
    insertStudent,
    updateStudent,
    getStudentList,
    studentDataBySequelizeQuery,
    courseDetailsBySequelizeQuery
    }
