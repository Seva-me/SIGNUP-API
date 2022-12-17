// import db from '../models/index';
const sequelize=require('sequelize')
const datadb=require('../models/index')
async function result(req,res){
    // const [results, metadata] = await datadb.sequelize.query(req);
    // console.log(results,metadata)
    return res.status(200).send("working")
}


module.exports={result}