const datadb=require('../models/index');
const { QueryTypes } = require('sequelize');

async function selectdata(req,res){
    try{
        let result;
        switch(req.body.data){
            case'studentstabledata':
                result = await datadb.sequelize.query('select * from students',{type: QueryTypes.SELECT});
                break;
            
            case'addresstabledata':
                result= await datadb.sequelize.query('select * from addresses',{type: QueryTypes.SELECT});
                break;
            
            case'agewithname':
                result=await datadb.sequelize.query('select name,age  from students',{type: QueryTypes.SELECT});
                break;
            
            case 'alldata':
                result=await datadb.sequelize.query('select students.*,addresses.* from students left join addresses on students.student_id=addresses.address_id union select students.*,addresses.* from students right join addresses on students.student_id=addresses.address_id',{type: QueryTypes.SELECT});
                break;

            default:
                return res.status(400).send("Bad request");
                break;
        }
        console.log(result)
    if(result.length==0){
        return res.status(204).json({data:result});
    }    
    return res.status(200).json({data:result});
    }
    catch(err){
        // console.log(err)
        if(err.name=='SequelizeDatabaseError'){
            res.status(400).send("Bad Request");
        }
    }
}

async function insertaddressdata(req,res){
    const datainserted=await datadb.sequelize.query(req.body.addressdata,{type: QueryTypes.INSERT});
    return res.status(200).send('Data is inserted into address table ');
}

async function insertstudentdata(req,res){
    const datainserted=await datadb.sequelize.query('insert into students (name,marks,subject,age,createdAt,updatedAt,color) values(?,?,?,?,?,?,?)',{replacements: [req.body.name,req.body.age,req.body.subject,req.body.age,req.body.createdat,req.body.updatedat,req.body.color],type: QueryTypes.INSERT});
    return res.status(200).send('Data is inserted into student table ');
}

async function updateStudent(req,res){
    const updatedValue=await datadb.sequelize.query('update students set addressId=2 where student_id=7',{type:QueryTypes.UPDATE})
    return res.status(200).send("Data is updated in student table");
}

async function updateAddress(req,res){
    const updatedValue=await datadb.sequelize.query('update addresses set city="jabalpur" where state="MP"',{type:QueryTypes.UPDATE})
    return res.status(200).send("Data is updated in Address table");
}


module.exports={
    selectdata,
    insertaddressdata,
    insertstudentdata,
    updateStudent,
    updateAddress
}
