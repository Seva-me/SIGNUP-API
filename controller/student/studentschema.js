const joi=require("joi");
const pattern = require('../utilities/pattern')
const insertStudentData=joi.object().keys({
    first_name:joi.string().pattern(new RegExp(pattern.namePattern)).required(),
    last_name: joi.string().pattern(new RegExp(pattern.namePattern)).required(),
    age:joi.number().integer().min(5).max(45).required(),
    roll:joi.number().integer().required(),
    school_name:joi.string().pattern(new RegExp(pattern.namePattern)).required(),
    blood_group:joi.string().pattern(new RegExp(bloodGroupPattern)).required(),
    address_id:joi.number().integer().required()
});

const updateStudentData=joi.object().keys({
    data:joi.string().pattern(new RegExp(dataPattern)).required(),
    first_name:joi.string().pattern(new RegExp(pattern.namePattern)),
    last_name: joi.string().pattern(new RegExp(pattern.namePattern)),
    age:joi.number().integer().min(5).max(45),
    roll:joi.number().integer(),
    school_name:joi.string().pattern(new RegExp(pattern.namePattern)),
    blood_group:joi.string().pattern(new RegExp(bloodGroupPattern)),
    address_id:joi.number().integer(),
    id:joi.number().integer().required()
}).min(3);

const studentDetail=joi.object().keys({
    data:joi.string().pattern(new RegExp(dataPattern)).required(),
    id:joi.number()
});

const studentBySequelizeQuery=joi.object().keys({
    data:joi.string().pattern(new RegExp(dataPattern)).required(),
    id:joi.number()
});

const courseDetailsBySequelizeQuery=joi.object().keys({
    course:joi.string(),
    id:joi.number()
});

module.exports={
    insertStudentData,
    updateStudentData,
    studentDetail,
    studentBySequelizeQuery,
    courseDetailsBySequelizeQuery
    }