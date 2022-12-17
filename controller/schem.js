const joi=require('joi')
const signupSchemas=joi.object().keys({
    firstname:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    lastname: joi.string().pattern(new RegExp(/^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),   
    email : joi.string().email().required(),
    password: joi.string().pattern(new RegExp(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,24}$/)).required()
});

// firstname:joi.string().pattern(new RegExp(/^[a-zA-Z](\s)?([a-zA-Z])?(@#$%~&*!)?!/)).required()
// const response=validateUser()
// if(response.error){
//     console.log(response.error.details)
// }
// else{
//     console.log("Validated data")
// }

module.exports=signupSchemas
