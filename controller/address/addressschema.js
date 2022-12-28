const joi=require('joi');
const addressSchema=joi.object().keys({
    state:joi.string().min(3).pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    district:joi.string().min(3).pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    pincode:joi.number().integer().min(6),
    city:joi.string().pattern(new RegExp( /^[a-zA-z]+([\s][a-zA-Z]+)*$/)).required(),
    houseno:joi.string(),
    addresslive:joi.boolean()
});


const updateaddresSchema=joi.object().keys({
    data:joi.string().pattern(new RegExp( /^[a-zA-z]*$/)).required(),
    state:joi.string().pattern(new RegExp( /^['a-zA-z']*$/)),
    city:joi.string().pattern(new RegExp( /^['a-zA-z']*$/)),
    district:joi.string().pattern(new RegExp( /^['a-zA-z']*$/)),
    houseno:joi.string(),
    pincode:joi.number(),
    addresslive:joi.boolean(),
    id:joi.number().required()
});

module.exports={
    addressSchema,
    updateaddresSchema
    }