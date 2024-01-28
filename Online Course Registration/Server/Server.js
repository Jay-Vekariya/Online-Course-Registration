require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();   //function with empty arguments 
const router = require("./Router/auth-router");
const connectDb = require("./Utils/Db");

//handling CORS policy..
const corsOptions = {
    origin: "http://localhost:5173",
    methods:"GET, POST , PUT, DELETE, PATCH, HEAD",
    optionsSuccessStatus: 200,
    credentials: true,
}
app.use(cors(corsOptions));  
app.use(express.json());  //Middleware with the help of we can use a JSON formate in our code 

//? Mount the Router: to use the router in your main Express app, you can "mount" it at a specifyc URL prefix
app.use("/api/auth", router);
app.use("/api/auth/signin", router);

const PORT = 5000;

//if the Database is successfully Connected then you start the server..
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server Listing on Port Number: ${PORT}`);
    });    
})
