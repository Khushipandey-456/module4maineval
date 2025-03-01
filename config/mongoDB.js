const mongoose = require("mongoose");

const connectedToDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/empher");
    console.log("Connected to database");
}

module.exports = connectedToDB