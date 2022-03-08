const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const CONNECTION_URL = process.env.mongo_url;
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

mongoose.Promise = global.Promise;

const con = mongoose.connection;

con.on("open", () => {
    console.log("Connected");
});
module.exports = mongoose;