const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const authRouter= require("./routes/auth");
// const { default: mongoose } = require('mongoose');

const db = "mongodb+srv://devrajthakkar003:devraj3123@cluster0.tqabkpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//middleware
app.use(express.json())
app.use(authRouter)

mongoose
    .connect(db)
    .then(()=>{
    console.log('Connection Successful')
    })
    .catch((e)=>{
    console.log(e);
    });
//API
app.listen(PORT,"0.0.0.0",() => {
    console.log(`Connected at port ${PORT}`)
});
