const mongoose = require('mongoose');

const url ="mongodb+srv://kabil:kabil1996@cluster0.tdwut.mongodb.net/backend_day?retryWrites=true&w=majority";

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url)
        console.log(`mongoDB connected ${con.connection.host}`);
    } catch (error) {
        console.log("data base not connected");
    }
}

module.exports = connectDB;
