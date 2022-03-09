const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require("./config/db");
const PORT = process.env.PORT || 5000;
const todoRoute = require('./routes/todoRoute');


app.use(cors());
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.send('Welcome to todo');
});
app.get("/api", (req,res,next) =>{
    res.status(200).json({ message: "Welcome to my page."})
    next();
});
app.use("/api",todoRoute);

app.listen(PORT,() => {
    console.log(`Listening on ${ PORT }`);
});