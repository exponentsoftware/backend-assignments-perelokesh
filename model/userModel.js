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
        validate: {
            validator: function (v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            //message to return if validation fails
            message: (props) => `${props.value} is not a valid email`,
          },
          unique: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            maxLength:10,
            unique: true,
            validate: {
              validator: function (v) {
                return /^\d{10}$/.test(v);
              },
              //message to return if validation fails
              message: (props) => `${props.value} is not a valid phone number`,
            },
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
