const express = require("express");
const connectedToDB = require("./config/mongoDB");

const app = express();

app.use(express.json());

PORT = process.env.PORT

app.listen(PORT , () =>{
    connectedToDB();
    console.log("Server Started");
});