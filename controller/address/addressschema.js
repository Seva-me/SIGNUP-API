const joi=require('joi');
const pattern=require('../utilities/pattern')
const insertAddress=joi.object().keys({
    home:joi.string().required(),
    landmark:joi.string(),
    city:joi.string().pattern(pattern.namePattern).required(),
    state: joi.string().pattern( pattern.namePattern).required(),
    pincode:joi.string().alphanum().required(),
    country: joi.string().pattern( pattern.namePattern).required(),
    address_live:joi.boolean().required()
});


const updateAddress=joi.object().keys({
    home:joi.string(),
    landmark:joi.string(),
    city:joi.string().pattern(new RegExp(pattern.namePattern)),
    state: joi.string().pattern(new RegExp( pattern.namePattern)),
    pincode:joi.string().alphanum().min(6).max(8),
    country: joi.string().pattern(new RegExp( pattern.namePattern)),
    address_live:joi.boolean(),
    id:joi.number().integer().required()
});

module.exports={
    insertAddress,
    updateAddress
    }