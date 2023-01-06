const joi=require("joi");
const insertStudentschema=joi.object().keys({
    first_name:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    last_name: joi.string().pattern(new RegExp(/^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    age:joi.number().integer().min(5).max(45).required(),
    roll:joi.number().integer().required(),
    school_name:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    blood_group:joi.string().pattern(new RegExp( /(A|B|AB|O)[+-]/)).required(),
    address_id:joi.number().integer().required()
});

const updatestudentSchemas=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    first_name:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)),
    last_name: joi.string().pattern(new RegExp(/^[a-zA-z]+([\s][a-zA-Z]+)*$/)),
    age:joi.number().integer().min(5).max(45),
    roll:joi.number().integer(),
    school_name:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)),
    blood_group:joi.string().pattern(new RegExp( /(A|B|AB|O)[+-]/)),
    address_id:joi.number().integer(),
    id:joi.number().integer().required()
}).min(3);

const studentDetailschemas=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    id:joi.number()
});

const studentbySequelizequerychema=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    id:joi.number()
});

module.exports={
    insertStudentschema,
    updatestudentSchemas,
    studentDetailschemas,
    studentbySequelizequerychema
    }