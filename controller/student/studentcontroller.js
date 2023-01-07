const datadb = require('../../models/index');
const { QueryTypes } = require('sequelize');
const studentModel = require('../../models');
const { Op } = require("sequelize");
const { request } = require('express');


async function insertStudentData(req, res) {
    try {
        const dataInserted = await datadb.sequelize.query('insert into students (first_name,last_name,age,roll,school_name,blood_group,address_id) values(?,?,?,?,?,?,?)', { replacements: [req.body.first_name, req.body.last_name, req.body.age, req.body.roll, req.body.school_name, req.body.blood_group, req.body.address_id], type: QueryTypes.INSERT });
        console.log(dataInserted)
        if (dataInserted) {
            return res.status(200).send('Data is inserted into student table ');
        }
        return res.status(500).send("server error")
    } catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong");
    }
}


async function updateStudent(req, res) {
    try {
        let updateQuery;
        switch (req.body.data) {
            case ('firstname'):
                updateQuery = "update students set first_name='" + req.body.first_name + "' where student_id=?";
                break;
            case ('lastname'):
                updateQuery = "update students set last_name='" + req.body.last_name + "' where student_id=?";
                break;
            case ('age'):
                updateQuery = "update students set age=" + req.body.age + " where student_id=?";
                break;
            case ('roll'):
                updateQuery = "update students set roll=" + req.body.roll + " where student_id=?";
                break;
            case ('schoolname'):
                updateQuery = "update students set school_name='" + req.body.school_name + "' where student_id=?";
                break;
            case ('bloodgroup'):
                updateQuery = "update students set blood_group='" + req.body.blood_group + "' where student_id=?";
                break;
            case ('addressid'):
                updateQuery = "update students set address_id=" + req.body.address_id + " where student_id=?";
                break;
            default:
                return res.status(400).send("bad request");
        }
        const result = await datadb.sequelize.query(updateQuery, { replacements: [req.body.id], type: QueryTypes.UPDATE });
        if (result[1] == 0) {
            return res.status(500).send("server error");
        }
        return res.status(200).send("Data Updated Successfully");
    } catch (err) {
        return res.status(500).send("server error");
    }
}

async function studentDetail(req, res) {
    try {
        let joinQuery;
        // switch (req.query.data) {
        //     case 'studentwithaddress':
        //         joinQuery = 'select students.*,addresses.* from students inner join addresses on students.student_id=addresses.address_id';
        //         break;
        //     case 'studentwithnoaddress':
        //         joinQuery = 'select students.*,addresses.* from students right join addresses on students.student_id=addresses.address_id';
        //         break;
        //     case 'studentwithid':
        //         joinQuery = 'select students.*,addresses.* from students left join addresses on students.student_id=addresses.address_id where students.student_id='+req.query.id;
        //         break;
        //     default:
        //         return res.status(500).send("server error");    
        // }
        // const result = await datadb.sequelize.query(joinQuery, { type: QueryTypes.SELECT });
        // if (result.length === 0) {
        //     return res.status(204).send("data not found");
        // }
        // return res.status(200).json(result);
    } catch (err) {
        console.log(err)
        res.status(500).send("something went wrong");
    }
}

async function studentDataBySequelizeQuery(req, res) {
    try {
        let result;
        switch (req.query.data) {
            case 'studentwithaddress':
                result = await studentModel.student.findAll({
                    attributes: ['first_name', 'last_name'],
                    where: {
                        address_id:
                        {
                            [Op.ne]: null
                        }
                    },
                    include: [{
                        model: studentModel.address,
                        // its a left join
                    }]
                });
                break;
            case 'studentwithid':
                result = await studentModel.student.findAll({
                    where: {
                        id: req.query.id
                    },
                    include: [{
                        model: studentModel.address,
                        required: false,
                        // left join
                    }]
                });
                break;
            case 'studentwithnoaddress':
                result = await studentModel.student.findAll({
                    attributes: ['first_name', 'last_name'],
                    where: {
                        address_id:
                        {
                            [Op.is]: null
                        }
                    },
                });
                break;
            case 'studentwithnocourse':
                result = await studentModel.student.findAll({
                    where: {
                        course_id: {
                            [Op.is]: null
                        }
                    },
                    attributes: ['first_name', 'last_name']
                });
                break;
            default:
                return res.status(500).send("something went wrong");
        }
        // return res.status(200).json(result)   
        if (result.length === 0) {
            return res.status(204).send("data not found");
        }
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err)
        res.status(500).send("something went wrong");
    }
}

async function courseDetailsBySequelizeQuery(req, res) {
    let arrayList = JSON.parse(req.query.course);
    result = await studentModel.student.findAll({
        attributes: ['first_name', 'last_name'],
        include: [{
            model: studentModel.course,
            where: {
                id: {
                    [Op.in]: arrayList
                }
            },
            attributes: ['id', 'course_price', 'course_name']
        }],
    });
    if(result.length === 0){
        return res.status(204).send("data not found");
    }
    return res.status(200).json(result);
    // try{
    // let result;
    // console.log(req.query.course);
    // 
    // switch(req.query.data){
    //     case 'course':
    //         result = await studentModel.student.findAll({
    //             attributes: ['id', 'first_name', 'last_name'],
    //             include: [{
    //                 model: studentModel.course,
    //                 where: { course_name: req.query.course },
    //                 attributes: ['id', 'course_price', 'course_name']
    //              }],});
    //              break;       
    // case 'allcourse':
    //     result = await studentModel.course.findAll();
    //     console.log(result)
    //     break;
    // attributes: ['id', 'course_price', 'course_name'],
    // include: [{
    //     model: studentModel.student,
    //     // where: { course_name: req.query.course },
    //  }],});
    // default:
    //     return res.status(500).send("server error")         
    // };
    // if(result.length === 0){
    //     return res.status(204).send("data not found");
    // }
    // return res.status(200).json(result);
    // } catch(err){
    //     return res.status(500).send("something went wrong");
    // }
}




module.exports = {
    insertStudentData,
    updateStudent,
    studentDetail,
    studentDataBySequelizeQuery,
    courseDetailsBySequelizeQuery
}