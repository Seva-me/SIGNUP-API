const joi=require("joi");
const insertStudentschema=joi.object().keys({
    name:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    marks:joi.number().integer().min(0).max(100).required(),
    subject:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    age:joi.number().integer().min(5).max(45).required(),
    color:joi.string().required()  
});

const updatestudentSchemas=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    subject:joi.string().pattern(new RegExp( /^['a-zA-z']*$/)),
    age:joi.number(),
    marks:joi.number(),
    id:joi.number().required()
});

const detailSchemas=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    id:joi.number()
});


module.exports={
    insertStudentschema,
    updatestudentSchemas,
    detailSchemas
    }