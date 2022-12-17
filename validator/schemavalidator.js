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
function validatorschema(schema){
    return (req,res,next)=>{
        const result=schema.validate(req.body);
        console.log("inside middleware");
        if(result.error){
            console.log(result.error);
            return res.status(400).send("bad request");
        }
        next();
    }
}

module.exports=validatorschema
