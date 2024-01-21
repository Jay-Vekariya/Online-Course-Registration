const mongoose = require('mongoose');

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

//define the model or the collection name..   

const User = new mongoose.model("User", userSchema);

module.exports = User;