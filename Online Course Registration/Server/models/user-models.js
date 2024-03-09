const mongoose = require('mongoose');
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        require: true,
    },
    Username:{
        type: String,
        require: true,
    },
    Password:{
        type: String,
        require: true,
    },
    ConfirmPasswrd:{
        type: String,
        require: true,
    },
})

//json web token
userSchema.methods.generateToken = function(){
    try {
        return JWT.sign({
            //Payload
            userId: this._id.toString(),
            email: this.email,
        }, 
        //Signature
        process.env.JWT_KEY,
        {
            expiresIn: "10d",
        }
        );
    } catch (error) {
        console.error(error);
    }
};

//define the model or the collection name..   
const User = new mongoose.model("User", userSchema);

module.exports = User;