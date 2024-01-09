const express = require("express");
const app = express();   //function with empty arguments 
const router = require("./Router/auth-router");
const connectDb = require("./Utils/Db");

app.use(express.json());  //Middleware with the help of we can use a JSON formate in our code 

//? Mount the Router: to use the router in your main Express app, you can "mount" it at a specifyc URL prefix
app.use("/api/auth", router);

const PORT = 5000;

//if the Database is successfully Connected then you start the server..
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server Listing on Port Number: ${PORT}`);
    });    
})
