const signupSchemas = require("../controller/schem");

/* ------> middleware function to validate requestbody */



 function signupmiddleware(req,res,next){
    const result=signupSchemas.validate(req.body);
    console.log("inside middleware")
    if(result.error){
        console.log(result.error);
        return res.status(400).send("bad request");
        // return res.status(400).send(result.error.details);
    }
    next();
}

module.exports=signupmiddleware