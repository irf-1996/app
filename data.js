const mongoose=require('mongoose');
const emp=mongoose.Schema({
    name:String,
    position:String, 
    location:String,  
    salary:Number
})
const data=mongoose.model('list',emp);
module.exports=data