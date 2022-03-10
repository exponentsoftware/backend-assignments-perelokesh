const express = require('express');
const app = express();
const {middlewares} = require('./middleware');

const db = require("./config/db");
const PORT = process.env.PORT || 5000;

//routes
const todoRoute = require('./routes/todoRoute');
const userRoute = require('./routes/userRoute');


app.use('/',todoRoute);
app.use('/',userRoute);

app.use(middlewares);

app.get('/', (req,res)=>{
    res.send('Welcome to todo');
});
app.get("/api", (req,res,next) =>{
    res.status(200).json({ message: "Welcome to my page."})
    next();
});


app.listen(PORT,() => {
    console.log(`Listening on ${ PORT }`);
});