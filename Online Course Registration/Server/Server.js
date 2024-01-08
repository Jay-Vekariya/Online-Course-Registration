const express = require("express");
const app = express();   //function with empty arguments 
const router = require("./Router/auth-router");

//? Mount the Router: to use the router in your main Express app, you can "mount" it at a specifyc URL prefix
app.use("/api/auth", router);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server Listing on Port Number: ${PORT}`);
});
