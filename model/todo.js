const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    username: {type: String,required: true,trim: true, maxLength:30,},
    title: {type: String,required:true,trim: true,maxLength:30 },
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

}, {timestamps:true});

module.exports= mongoose.model("Todo", TodoSchema);