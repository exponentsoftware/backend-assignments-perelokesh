const mongoose = require('mongoose');

const todoList = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
         type: String,
         required:true 
        },
     category: {
         type: String,
         enum: ["work","hobby","task"],
         default: "work"
     }   
});
module.exports.mongoose.model("Todo",todoList);