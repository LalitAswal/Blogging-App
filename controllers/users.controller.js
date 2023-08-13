const usersModel = require('../models/usersModel');

const registrations =async(req, res)=>{

    try {
        const { firstName, lastName, email, password }= req.body;

        if(!firstName || !lastName || !email || !password) {
             ('checking line 10');
           return res.status(400).send({message:`Empty Fields are not allowed`}); 
           
        }
        await usersModel.insertMany({firstName:firstName, lastName:lastName, email:email,password:password});
        
        return res.status(200).send({message:`Successfully updated`});   
 } catch (error) {
        return res.status(500).send({message:`Error updating`});
    }

}

module.exports = registrations;