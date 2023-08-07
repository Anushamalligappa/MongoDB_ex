const mongoose=require('mongoose');

const eventSchema=mongoose.Schema(
{
name:{type:String,required:[true,'Event Name is required']},
description:{type:String,required:[true,'Event Description is required']},
location:{type:String,required:[true,'Event Location is required']},
organizer:{type:mongoose.Types.ObjectId,ref:'User'},
attendees:[{type:mongoose.Types.ObjectId,ref:'User'}],
},
{
timestamp:true
}
)
const model=mongoose.model('Event',eventSchema)
module.exports=model;