const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../model/schema");
const mongoose = require("mongoose");


studentRoute.post("/create-student",(req,res)=>{
	console.log("hello");
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})


studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
//http://localhost:4000/students/update-student/ and PUT method
module.exports = studentRoute;
