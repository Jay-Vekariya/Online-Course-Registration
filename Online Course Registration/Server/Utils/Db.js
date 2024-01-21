const mongoose = require("mongoose");

    
const URI = process.env.MONGODB_URI;

const connectDb = async() => {
    try{
        await mongoose.connect(URI);
        console.log("Connection Successful to Database.")
    }catch(error){
        console.error("Databse Connection Failed..!!");
        process.exit(0);
    }
 }

 module.exports = connectDb;