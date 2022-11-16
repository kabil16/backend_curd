const mongoose = require('mongoose');

const User = mongoose.model("mentors",{
    name:String,
    age:Number,
    contact:Number,
    experience:Number
});

module.exports = User;