const express = require('express');
const app = express();
const {middlewares} = require('./middleware');
const Razorpay = require('razorpay');

const db = require("./config/db");
const sequelize = require('./config/sql');
const PORT = process.env.PORT || 3000;

//routes
const todoRoute = require('./routes/todoRoute');
const userRoute = require('./routes/userRoute');
const filterRoute = require('./routes/filter');
const commentRoute = require('./routes/comment');
const tagRoute = require('./routes/tags');
const paymentRoute = require('./routes/payments')
app.use(middlewares);


app.use('/',todoRoute);
app.use('/',userRoute);
app.use('/',filterRoute);
app.use('/',commentRoute);
app.use('/', tagRoute);
app.use('/', paymentRoute);

const razorpayInstance = new Razorpay({
    key_id: process.env.razorSecretKey,
    key_secret: process.env.razorSecretKey
});


app.get("/", (req,res,next) =>{
    res.status(200).json({ message: "Welcome to my page."})
    next();
});


app.listen(PORT,() => {
    console.log(`Listening on ${ PORT }`);
});