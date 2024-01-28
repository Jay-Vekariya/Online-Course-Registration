const User = require("../models/user-models");
const bcryptjs = require("bcryptjs");

//* Controllers //

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

const home = async(req,res) => {
    try{
        res.status(200).send("it's a message using Router");
    
    }catch(error){
        console.log(error);
    }
}

//Registration Logic

const register = async (req,res)=>{
    try{
        console.log(req.body);
        const {Email, Username, Password, ConfirmPasswrd} = req.body;

        const userExist = await User.findOne({Email}); 

        if(userExist){
            return res.status(400).json({msg: "Email already exists"});
        }

        //To hash the password
        const saltRound = 10; 
        const hash_Password = await bcryptjs.hash(Password, saltRound);

        const Usercreated =  await User.create({Email, Username, Password:hash_Password, ConfirmPasswrd:hash_Password});

        res.status(200).json({msg: Usercreated})
    }
    catch(error){
        res.status(400).json({msg:"page not found"});
    }
}

const signin = async (req,res) => {
    try {
        console.log(req.body);
        const {Email, Password } = req.body;

        const userExist1 = await User.findOne({Email});

        if(userExist1){
            return res.status(400).json({msg:"Email already exists"});
        }

        const Usercreated = await User.create({Email, Password});

        res.status(200).json({msg: Usercreated});
    } catch (error) {
        res.status(400).json({msg:"page not found"});
        
    }
}



module.exports = { home, register, signin };