const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength:30,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength:30,
        unique: true,
        validate(value){ 
            if(!validator.isEmail(value)){
                 throw new Error("email is invalid"); 
            }
        }
        
    },
    phone: {
        type:Number,
        trim:true,
        minlength:10,
        maxlength:10,
        unique:true,
        validate(value){ 
            if(!validator.isNumber(value)){
                 throw new Error("number is invalid"); 
            }
        }
        
        },
    role: {
        type:String,
        trim: true,
        required: true,
        lowercase:true,
        enum: ["admin", "user"]
        },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },

},{timestamps:true}
);
module.exports = mongoose.model('User',userSchema);
