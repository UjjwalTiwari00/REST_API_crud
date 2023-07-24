const express= require("express");
const Mongoose  = require("mongoose");

const menSchema =new Mongoose.Schema({
    ranking:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:Number,
        default:"100"
    },

})

const MensRanking =new Mongoose.model("MenRanking",menSchema)
module.exports=MensRanking;