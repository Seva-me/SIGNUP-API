const datadb = require('../../models/index');
const { QueryTypes } = require('sequelize');




async function insertAddressdata(req, res) {
    try {
        const dataInserted = await datadb.sequelize.query('insert into addresses(state,district,pincode,city,house_no,address_live)values(?,?,?,?,?,?)', { replacements: [req.body.state, req.body.district, req.body.pincode, req.body.city, req.body.houseno, req.body.addresslive], type: QueryTypes.INSERT });
        if (dataInserted) {
            return res.status(200).send('Data is inserted into address table ');
        }
    } catch (err) {
        return res.status(500).send('something went wrong');
    }
}


async function updateAddress(req, res) {
    try {
        let updateQuery;
        switch (req.body.data) {
            case 'state':
                updateQuery ='update addresses set state='+req.body.state+' where address_id=?';
                break;
            case 'city':
                updateQuery ='update addresses set state='+req.body.city+' where address_id=?';
                break;
            case 'district':
                updateQuery ='update addresses set state='+req.body.district+' where address_id=?';
                break;
            case 'pincode':
                updateQuery ='update addresses set state='+req.body.pincode+' where address_id=?';
                break;
            case 'houseno':
                updateQuery = 'update addresses set state='+req.body.houseno+' where address_id=?';
                break;
            case 'addresslive':
                updateQuery = 'update addresses set state='+req.body.addresslive+' where address_id=?';
                break;
            default:
                return res.status(400).send("Bad request");
        }
        const result=await datadb.sequelize.query(updateQuery,{replacements:[req.body.id],type:QueryTypes.UPDATE});
        if(result[1]==0){
            return res.status(400).send("bad request");
        }
        return res.status(200).send("Data Updated Successfully");
    } catch (err) {
        return res.status(500).send("Server error");
    }
}



module.exports = {
    insertAddressdata,
    updateAddress
}