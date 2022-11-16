const express = require('express');
const { find } = require('../models/user');
const router = express.Router();
const User = require('../models/user')

router.get('/',  (req,res)=>{
    res.send("user route is working now");
});
router.post('/add',async(req,res)=>{
    try {
        const user = new User({
            name:req.body.name,
            age:req.body.age,
            contact:req.body.contact_no
        })
        const data = await user.save();
        res.json(data)
        
    } catch (error) {
        console.log(`error occures in user route${error}`);
    }
});
router.put("/update/:id",async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate({
                _id:req.params.id
            },
            {
                name:req.body.name,
                age:req.body.age,
                contact:req.body.contact
            },
            {new:true})
        res.json(user)
    } catch (error) {
        console.log(error);
    }
});
//find one data
router.get("/find/:name",async (req,res)=>{
    try {
        const user = await User.findOne({name:req.params.name});
        if(user){
            res.json(user);
            return;  
        }
        res.json(`${req.params.name} not available`)

    } catch (error) {
        console.log(error);
    }
});
//find all the data
router.get("/findall/:name",async(req,res)=>{
    try {
        const user = await User.find({name:req.params.name});
        res.json(user)        
    
    } catch (err) {
        res.json({msg:err.message});
    }
});
//find and delete
router.delete("/delete/:name",async(req,res)=>{
    try {
        const user =await User.findOneAndDelete({name:req.params.name})
        res.json(user)
    } catch (error) {
        res.json(error);
    }
})


module.exports = router;