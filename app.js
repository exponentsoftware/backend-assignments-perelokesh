const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res,next) =>{
    res.status(200).json({ message: "Welcome to my page."})
    next();
});

app.listen(PORT,() => {
    console.log(`Listening on ${ PORT }`);
});