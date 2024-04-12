// const mongoose = require("mongoose");

    
// const URI = process.env.MONGODB_URI;

// const db = async() => {
//     try{
//         await mongoose.connect(URI);
//         console.log("Connection Successful to Database.")
//     }catch(error){
//         console.error("Databse Connection Failed..!!");
//         process.exit(0);
//     }
//  }

// //  const fetchFromDb...

// const db=client.db("MINI-PROJECT");
//  module.exports = db;

const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("users").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

const db = client.db("MINI-PROJECT");

module.exports = db;
