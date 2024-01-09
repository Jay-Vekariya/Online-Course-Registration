const mongoose = require("mongoose");

const URI = "mongodb+srv://jayvekariya2003:HujkQ123@cluster0.mb8u0dn.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(URI= mongodb+srv://jayvekariya2003:<password>@cluster0.mb8u0dn.mongodb.net/ );
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