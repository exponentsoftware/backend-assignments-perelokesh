const mongoose = require('mongoose');

const TODO = mongoose.model(
    "TODO",new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
         type: String,
         required:true 
        },
    status:{
        type: String,
        required: true,
        enum: ["active", "completed","in-progress","deleted"]
    },   
     category: {
         type: String,
         enum: ["work","hobby","task"],
         default: "work"
     },

}, {timestamps:true})
);
module.exports= TODO;