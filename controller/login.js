async function loginPage(req,res){
    let {email,password}=req.body;
    let userexisted;
    try{
        if(! email==email ||userexisted.password != password ){
            return res.status(400).send("bad request")
        }
        return userexisted= await User.findone({email:email});

    }
    catch(error){
        return res.status(400).send(error.message)
    }

    
    

    // return res.status(200).send('you are logged in')
}

module.exports=loginPage