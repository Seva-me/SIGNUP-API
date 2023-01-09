const express=require('express');
const router=express.Router();
const addressController=require("./addresscontroller");
const addressSchema=require('./addressschema');
const validator=require('../../middlewares/validator');

router.post("/insert-address",validator(addressSchema.insertAddress),addressController.insertAddress);
router.put("/update-address",validator(addressSchema.updateAddress),addressController.updateAddress);

module.exports=router