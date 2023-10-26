const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/router.js");
const cors= require("cors");
const bodyParser= require("body-parser");




mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://abc123:c0oOhCvtdifGAHMM@cluster0.zscgedx.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred while connecting with DB"));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/students",studentRoute);


app.listen(4000,()=>{
    console.log("Server started at 4000");
})

