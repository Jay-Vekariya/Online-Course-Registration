require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();   //function with empty arguments 
const router = require("./Router/auth-router");
const db = require('./Utils/Db');

const {
  
} = require("./Utils/Db"); 
const {ObjectId} = require('mongodb')

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
app.listen(PORT, () => {
  console.log(`Server listening on Port Number: ${PORT}`);
});

// get 


  app.get('users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await collection.findOne({ _id: new ObjectId(userId) }); // Fetch user by ObjectId
      console.log("User Details: ", user)

      if (!user) {
        return res.status(404).json({ error: 'user not found' });
      }
      res.json(user); // Send the user as JSON response
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });