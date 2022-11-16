const mongoose = require('mongoose');

const User = mongoose.model("users",{
    name:String,
    age:Number,
    contact:Number
});

module.exports = User;