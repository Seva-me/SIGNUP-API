const User = require("../models").user
const bcrypt=require('bcryptjs');
let pattern = require("../regex");
const signupSchemas = require("./schem");
// import {result} from "../validator/schemavalidator"

// const validatefunction=require("../validator/schemavalidator");





function getdata(req, res) {
    res.status(200).send("welcome to homepage")
}

async function postdata(req,res) {
    /* using joi module to validate request body */
    try{
        // const result=schemaDetail.validate(req.body);
        // if(result.error){
        //     console.log(result.error);
        //     return res.status(400).send("bad request");
        //     // return res.status(400).send(result.error.details);
        // }
        


        // const result=signupSchemas.validate(req.body)
        // if(result.error){
        //     console.log(result.error);
        //     return res.status(400).send("bad request");
        //     // return res.status(400).send(result.error.details);
        // }
        
        // bcrypt.genSalt(10, function (err, Salt){
        //     bcrypt.hash(req.body.password,Salt,function(err,hash){
        //     if(err){
        //      return console.log(err);
        //      }
        //     hashedpassword=hash;
        //     console.log(hash);
        // });
        // });
        let hashedpassword=await bcrypt.hash(req.body.password, 10);
        console.log(hashedpassword)

        const newuser = await User.create({ firstName: req.body.firstname, lastName: req.body.lastname, email: req.body.email, password: hashedpassword });
        // console.log(jane)
        if(newuser){
            return res.status(200).send("Your data is saved Successfully");
        }
    }
    catch(err){
        console.log(err)
        if(err.name=='SequelizeUniqueConstraintError'){
            res.status(409).send("Email already exist")
        }
        else{
            res.status(500).send("Something went wrong")
        }
    }

    /* validating without joi module only using if-else condition */
    // try {
    //     // console.log(result)
    //     // console.log(req.body.firstname.match(pattern.firstName))
    //     // if ((req.body.firstname == null) || (req.body.lastname == null) || (req.body.email == null) || (req.body.password == null)) {
    //     //     return res.status(400).send("one key is missing in request");
    //     // }
    //     if ((!req.body.firstname) || (! req.body.lastname ) || (!req.body.password ) || (!req.body.email )) {
    //         return res.status(400).send("bad request Either for key missing Or blank value");
    //     }
    //     if ((req.body.firstname.match(pattern.firstName) || req.body.lastname.match(pattern.lastName) || (!(req.body.email.match(pattern.emailPattern))))) {
    //         return res.status(400).send("Invalid input ");
    //     }
    //     if(req.body.firstname.startsWith(" ") || req.body.lastname.startsWith(" ") || req.body.firstname.endsWith(" ") || req.body.lastname.endsWith(" ")){
    //         return res.status(400).send("This field can not have whitespace at start and at end");
    //     }
    //     // if(req.body.firstname.endsWith(" ") || req.body.lastname.endsWith(" ")){
    //     //     return res.status(400).send("This field can not end with whitespace");
    //     // }
    //     // if (req.body.lastname.match(pattern.lastName)) {
    //     //     return res.status(400).send("Invalid input for Last name");
    //     // }
    //     // if (!(req.body.email.match(pattern.emailPattern))) {
    //     //     return res.status(400).send("Invalid input for  email ");
    //     // }
    //     if (!req.body.password.match(pattern.passwordPattern)) {
    //         return res.status(400).send("Invalid Password Format ")
    //     }
    //     const jane = await User.create({ firstName: req.body.firstname, lastName: req.body.lastname, email: req.body.email, password: req.body.password });
    //     // console.log(jane)
    //     if (jane) {
    //         return res.status(200).send("Your data is saved Successfully");
    //     }
    //     res.status(500).send("something went wrong")
    // }
    // catch (err) {
    //     console.log(err)
    //     if (err) {
    //         return res.status(500).send(err.message)
    //     }
    // }
}

module.exports = { getdata, postdata }
