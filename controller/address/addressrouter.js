const express=require('express');
const router=express.Router();
const addressControll=require("./addresscontroller");
const addresSchema=require('./addressschema');
const validator=require('../../middlewares/validator');

router.post("/insertAddressdetails",validator(addresSchema.addressSchema),addressControll.insertAddressdata);
router.put("/updateAddressdata",validator(addresSchema.updateaddresSchema),addressControll.updateAddress);

module.exports=router