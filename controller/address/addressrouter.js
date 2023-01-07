const express=require('express');
const router=express.Router();
const addressControll=require("./addresscontroller");
const addresSchema=require('./addressschema');
const validator=require('../../middlewares/validator');

router.post("/insertAddressdetails",validator(addresSchema.insertAddressData),addressControll.insertAddressData);
router.put("/updateAddressdata",validator(addresSchema.updateAddressData),addressControll.updateAddressData);

module.exports=router