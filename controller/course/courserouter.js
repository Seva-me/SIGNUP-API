const express=require('express');
const router=express.Router();
const courseController = require('./coursecontroller');

router.post('insert-course',courseController.insertCourse)