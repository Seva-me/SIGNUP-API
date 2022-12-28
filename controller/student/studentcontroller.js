const datadb = require('../../models/index');
const { QueryTypes } = require('sequelize');


async function insertStudentdata(req, res) {
    try {
        const dataInserted = await datadb.sequelize.query('insert into students (name,marks,subject,age,color) values(?,?,?,?,?)', { replacements: [req.body.name, req.body.marks, req.body.subject, req.body.age, req.body.color], type: QueryTypes.INSERT });
        console.log(dataInserted)
        if (dataInserted) {
            return res.status(200).send('Data is inserted into student table ');
        }
    } catch (err) {
        return res.status(500).send("something went wrong");
    }
}


async function updateStudent(req, res) {
    try {
        let updateQuery;
        switch (req.body.data) {
            case ('subject'):
                updateQuery='update students set subject='+req.body.subject+' where student_id=?'
                break;
            case ('age'):
                updateQuery='update students set age='+req.body.age+' where student_id=?'
                break;
            case ('marks'):
                updateQuery='update students set marks='+req.body.marks+' where student_id=?'
                break;
            default:
                return res.status(400).send("bad request")
        }
        const result = await datadb.sequelize.query(updateQuery, { replacements: [req.body.id], type: QueryTypes.UPDATE });
        console.log(result)
        if (result[1] == 0) {
            return res.status(400).send("bad request");
        }
        return res.status(200).send("Data Updated Successfully");
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error");
    }
}

async function studentDetail(req, res) {
    try {
        let joinQuery;
        switch (req.query.data) {
            case 'studentwithaddress':
                joinQuery = 'select students.*,addresses.* from students inner join addresses on students.student_id=addresses.address_id';
                break;
            case 'studentwithnoaddress':
                joinQuery = 'select students.*,addresses.* from students right join addresses on students.student_id=addresses.address_id';
                break;
            case 'studentwithid':
                joinQuery = 'select students.*,addresses.* from students left join addresses on students.student_id=addresses.address_id where students.student_id='+req.query.id;
                break;
            default:
                return res.status(400).send("bad request");    
        }
        const result = await datadb.sequelize.query(joinQuery, { type: QueryTypes.SELECT });
        if (result.length === 0) {
            return res.status(204).send("data not found");
        }
        return res.status(200).json(result);
    } catch (err) {
        res.status(500).send("something went wrong");
    }
}

module.exports = {
    insertStudentdata,
    updateStudent,
    studentDetail
}