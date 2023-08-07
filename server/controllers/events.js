const Event=require("../models/event")

const createEvent=async(req,res)=>{
    try{
        const newEvent=await Event.create(req.body)
        console.log('Create Event',newEvent);
        res.status(201).json(newEvent)
    }catch(error){
        res.status(500).json({message:error.message,errors:error.errors})
        console.log('error',error)
    }
}
const getAllEvents=async(req,res)=>{
    try{
        const events=await Event.find();
        console.log('All Events',events);
        res.json(events);

    }catch(error){
        res.json({msg:error.message,errors:error.errors})

    }
}
const getEventById=async(req,res)=>{
    try{
         const{
             params:{id},
         }=req
        // {id}=req.params;
        const events=await Event.find({_id:id}).populate({path:'organizer', select:'name phoneNumber'}).populate({path:'attendees',select:'name email'});
        if(events.length==!0){
            res.status(201).json(events[0])
        }{
            res.status(404).json({message:'Event not Found'})
        }
        

    }catch(error){
          res.status(500).json({msg:error.message})
    }
}
const updateEvent=async(req,res)=>{
    try{
        // {id}=req.params;
        
        const{
        params:{id},
        body,
       }=req;
       const updatedEvent=await Event.findOneAndUpdate({_id:id},body,{new:true});
       if(updatedEvent){
        res.json(updatedEvent);
       }
       {
        res.status(404).json({msg:'event Not Found'})
       }

    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

const joinEvent=async(req,res)=>{
    try{
        // {id}=req.params;
        
        const{
        params:{id},
        body,
       }=req;

       const updatedEvent=await Event.findOneAndUpdate({_id:id},{$push:{attendees:body.userId}},{new:true});
       if(updatedEvent){
        res.json(updatedEvent);
       }
       {
        res.status(404).json({msg:'event Not Found'})
       }

    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

const deleteEvent=async(req,res)=>{
    try{
        const{
            params:{id},
        }=req
        const deletedEvent=await Event.findOneAndDelete({_id:id});
        if(deletedEvent){
            res.json(deletedEvent)
        }
        {
            res.status(404).json({msg:'event Not Found'})
        }

    }catch(error){
        res.status(500).json({msg:error.message})
    }
}


module.exports={
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    joinEvent,
    deleteEvent,
}