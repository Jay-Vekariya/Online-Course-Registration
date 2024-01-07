const express = require("express");
const app = express();   //function with empty arguments 

app.get("/", (req, res)=>{
res.status(200).send("Welcome to express js Server");
});

app.get("/register", (req, res)=>{
    res.status(200).send("Welcome to Registration Page");
    });    
    
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server Listing on Port Number: ${PORT}`);
})