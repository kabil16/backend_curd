const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor')

router.get("/",(req,res)=>{
    res.send("hello")    
});
//add new data
router.post("/add",async(req,res)=>{
    try {
        console.log(req.body);
        const mentor = new Mentor({
            name:req.body.name,
            age:req.body.age,
            contact:req.body.contact_no, 
            experience:req.body.experience
        })
        const data  =  await mentor.save()
        res.json(data);
    } catch (error) {
        console.log(`error occured in mentor ${error}`);
    }
});
//
router.get("/:name",async(req,res)=>{
    try {
        const user = await Mentor.findOne({name:req.params.name})

        if(user){
            res.json(user)
        }
        res.json(`${req.params.name} not  available`)
        
    } catch (error) {
        console.log(`error occourd in mentor route :${error}`);
    }
});
// find and update
router.put("/:id",async(req,res)=>{
    try {
        const user = await Mentor.findByIdAndUpdate({
            _id:req.params.id
        },            
        {
            name:req.body.name,
            age:req.body.age,
            contact:req.body.contact_no

        },{new:true})
        
        res.json(user);
        
        
    } catch (error) {
        res.json(`error in mentor route${error}`);
    }
})
module.exports = router;

