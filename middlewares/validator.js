// import {signupSchemas} from '../controller/schem'


// const schemaDetail=require('../controller/schem')
/* ------> middleware function to validate requestbody

// function isValid(req,res,next){
//     const result=schemaDetail.validate(req.body);
//     console.log("inside middleware");
//     if(result.error){
//         console.log(result.error);
//         return res.status(400).send("bad request");
//         // return res.status(400).send(result.error.details);
//     }
//     next();
// }

// module.exports=isValid
---------->*/

// const schemaDetail=require('../controller/schem')
function validator(schema) {
    return (req, res, next) => {
        let result;
        result=req.method != 'GET' ? schema.validate(req.body) : schema.validate(req.query);
        if (result.error) {
            console.log("Error during valdating request", result.error)
            return res.status(400).send("bad request");
        }
        next();
    }
}

module.exports = validator
