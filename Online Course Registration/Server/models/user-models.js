const bcrypt = require("bcryptjs");
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

//secure the password with the bcrypt.js
userSchema.pre("save", async function(next) {
    console.log("pre Method", this);
    const user = this;

    if(!user.isModified("Password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_Password = await bcrypt.hash(user.Password, saltRound);
        //to make sure that both are same
        user.Password = hash_Password;
        user.ConfirmPasswrd = hash_Password; 
    } catch (error) {
        next(error);
    }
})  

//compare the password
userSchema.methods.comparePassword = async function(Password){
    return bcrypt.compare(Password, this.Password)
}

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