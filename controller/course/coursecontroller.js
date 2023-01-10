const { QueryTypes } = require('sequelize');
const datadb = require('../../models/index');


async function insertCourse(req,res){
    try{
        let sqlQuery = 'insert into courses(course_name,course_price,createdAt,updatedAt) values(?,?,?,?)';
        let replacementsValue = [req.body.course_id,req.body.course_price];
        const dataInserted = await datadb.sequelize.query(sqlQuery,replacementsValue,{type: QueryTypes.INSERT});
        if (!dataInserted) {
            return res.status(500).send('something went wrong');
        }
        res.status(200).send('Data is inserted into course table ');
    } catch(err){
        return res.status(500).send("something went wrong");
    }
}


module.exports=insertCourse