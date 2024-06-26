const User = require("../models/user-models");
const bcryptjs = require("bcryptjs");
const express = require('express');
const router = express.Router();
const db = require('../Utils/Db');

//* Controllers //

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

const home = async(req,res) => {
    try{
        res.status(200).send("it's a message using Router");
    
    }catch(error){
        console.log(error);
    }
}

router.get("/register", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray(); // find all the records in the collection
    res.send(results).status(200);
  });

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });
  
  


//Registration Logic
const register = async (req,res)=>{
    try{
        console.log(req.body);
        const {Email, Username, Password, ConfirmPasswrd} = req.body;
        // console.log("hhhhhh: ", req.body._id)

        const userExist = await User.findOne({Email}); 

        if(userExist){
            return res.status(400).json({msg: "Email already exists"});
        }
        const Usercreated =  await User.create({Email, Username, Password, ConfirmPasswrd});

        res.status(200).json({msg: "Regiatation Succefull", token: await Usercreated.generateToken(), userId:Usercreated._id.toString(), });
    }
    catch(error){
        res.status(500).json({msg:"Internal server error"});
    }
}
//Login Logic..
const signin = async (req,res) => {
    try {
        console.log(req.body);
        const {Email, Password } = req.body;

        const userExist1 = await User.findOne({Email});
        console.log(userExist1);

        if(!userExist1){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const user = await userExist1.comparePassword(Password)

        if(userExist1){
            res.status(200).json({message: "Login Successful", token: await userExist1.generateToken(), userId:userExist1._id.toString(), });
        }else{
            res.status(400).json({message:'Invalid Email or Password'});
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        
    }
}

module.exports = { home, register, signin };