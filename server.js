const express = require('express');
const connectDB = require('./config/db');
const mentorRouter = require('./routes/mentor');
const userRouter = require('./routes/user');
const app = express();
const port = 3000;
//database connection
connectDB();
//base route
app.get("/",(req,res)=>{
    res.send("It's working");
});
// 
app.use(express.json());
//link routes 
app.use('/mentor',mentorRouter);
app.use('/user',userRouter);
//working port
app.listen(port,()=>{
    console.log(`server has been started ${port}`);
});