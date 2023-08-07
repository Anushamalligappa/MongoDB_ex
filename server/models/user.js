const mongoose = require('mongoose');

const userSchema = mongoose.Schema(

    {
        name:{type:String, required: [true,'name is required']},
        email:{type:String,unique:true,required:[true,"email is required"]}, 
        age:{type:Number,min:18,required:[true,"age is required"]},
        phoneNumber:{type:Number,unique:true,required:[true,"phoneNumber is required"]},
        isActive:{type:Boolean,default:true},
    },
    {
        timeStamps:true,
    }

);

const model=mongoose.model('User',userSchema)
module.exports=model;